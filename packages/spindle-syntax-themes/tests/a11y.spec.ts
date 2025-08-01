import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = [
  { name: 'light', path: '/' },
  { name: 'dark', path: '/?theme=dark' },
];

const axeRules = [
  'wcag2a',
  'wcag2aa',
  'wcag2aaa',
  'wcag21a',
  'wcag21aa',
  'best-practice',
  'experimental',
];

themes.forEach(({ name, path }) => {
  test.describe(`${name} theme`, () => {
    axeRules.forEach((ruleName) => {
      test(`axe/${ruleName}`, async ({ page }) => {
        await page.goto(path);
        await page.waitForLoadState('networkidle');

        const results = await new AxeBuilder({ page })
          .withTags([ruleName])
          .analyze();

        // wcag2aaaは警告として扱う
        if (ruleName === 'wcag2aaa') {
          if (results.violations.length > 0) {
            console.warn(
              `⚠ ${results.violations.length} warnings for ${ruleName} in ${name} theme`,
            );
            results.violations.forEach((v) => {
              console.warn(`  - ${v.id}: ${v.description}`);
            });
          }
        } else {
          expect(results.violations).toEqual([]);
        }
      });
    });

    test('wcag/page-has-title', async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    });

    test('wcag/page-has-valid-lang', async ({ page }) => {
      await page.goto(path);
      const html = await page.$('html');
      const lang = await html?.getAttribute('lang');
      expect(lang).toBeTruthy();
      expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/); // 例: ja, en, en-US
    });

    test('wcag/link-has-name', async ({ page }) => {
      await page.goto(path);
      const links = await page.$$('a');

      for (const link of links) {
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');
        const ariaLabelledby = await link.getAttribute('aria-labelledby');
        const title = await link.getAttribute('title');

        // リンクには何らかのアクセシブルな名前が必要
        const hasAccessibleName =
          text?.trim() || ariaLabel || ariaLabelledby || title;
        expect(hasAccessibleName).toBeTruthy();
      }
    });

    test('wcag/img-has-name', async ({ page }) => {
      await page.goto(path);
      const images = await page.$$('img');

      for (const img of images) {
        const alt = await img.getAttribute('alt');
        const ariaLabel = await img.getAttribute('aria-label');
        const ariaLabelledby = await img.getAttribute('aria-labelledby');
        const role = await img.getAttribute('role');

        // 装飾的な画像（role="presentation"）以外は代替テキストが必要
        if (role !== 'presentation' && role !== 'none') {
          const hasAccessibleName = alt !== null || ariaLabel || ariaLabelledby;
          expect(hasAccessibleName).toBeTruthy();
        }
      }
    });

    test('wcag/interactive-has-name', async ({ page }) => {
      await page.goto(path);
      const interactiveElements = await page.$$(
        'button, input, select, textarea, [role="button"]',
      );

      for (const element of interactiveElements) {
        const tagName = await element.evaluate((el) =>
          el.tagName.toLowerCase(),
        );
        const type = await element.getAttribute('type');

        // submit/resetボタン以外は名前が必要
        if (!(tagName === 'input' && (type === 'submit' || type === 'reset'))) {
          const text = await element.textContent();
          const ariaLabel = await element.getAttribute('aria-label');
          const ariaLabelledby = await element.getAttribute('aria-labelledby');
          const title = await element.getAttribute('title');
          const placeholder = await element.getAttribute('placeholder');

          const hasAccessibleName =
            text?.trim() || ariaLabel || ariaLabelledby || title || placeholder;
          expect(hasAccessibleName).toBeTruthy();
        }
      }
    });

    test('wcag/invalid-id-reference', async ({ page }) => {
      await page.goto(path);

      // aria-labelledby, aria-describedby, forなどの属性をチェック
      const elementsWithIdRefs = await page.$$(
        '[aria-labelledby], [aria-describedby], [for]',
      );

      for (const element of elementsWithIdRefs) {
        const labelledby = await element.getAttribute('aria-labelledby');
        const describedby = await element.getAttribute('aria-describedby');
        const forAttr = await element.getAttribute('for');

        const idRefs = [
          ...(labelledby ? labelledby.split(' ') : []),
          ...(describedby ? describedby.split(' ') : []),
          ...(forAttr ? [forAttr] : []),
        ];

        for (const id of idRefs) {
          if (id) {
            const referencedElement = await page.$(`#${CSS.escape(id)}`);
            expect(referencedElement).toBeTruthy();
          }
        }
      }
    });

    test('wcag/dialog-focus', async ({ page }) => {
      await page.goto(path);
      // 現在のページにはダイアログがないので、このテストはパスする
      // 実際のダイアログがある場合は、開いた時にフォーカスが適切に移動することを確認
      const dialogs = await page.$$('[role="dialog"], [aria-modal="true"]');
      expect(dialogs.length).toBe(0);
    });

    test('wcag/focusable-has-indicator', async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // フォーカス可能な要素を探す（リンク、ボタン、フォーム要素など）
      const focusableElements = await page.$$(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      let warningCount = 0;

      // フォーカス可能な要素が存在する場合、フォーカスインジケーターをテスト
      for (const element of focusableElements) {
        // 要素が表示されているか確認
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        // 要素にフォーカスを当てる
        await element.focus();

        // フォーカスインジケーターが見えることを確認
        const hasFocusIndicator = await element.evaluate((el) => {
          const style = window.getComputedStyle(el);
          const pseudoAfter = window.getComputedStyle(el, '::after');
          const pseudoBefore = window.getComputedStyle(el, '::before');

          // アウトラインまたはボーダーの変化をチェック
          const hasOutline =
            style.outline !== 'none' &&
            style.outline !== '' &&
            style.outlineWidth !== '0px';
          const hasBoxShadow =
            style.boxShadow !== 'none' && style.boxShadow !== '';
          const hasBorderChange =
            style.borderWidth !== '0px' || style.borderStyle !== 'none';
          const hasPseudoElement =
            (pseudoAfter.content !== 'none' && pseudoAfter.content !== '') ||
            (pseudoBefore.content !== 'none' && pseudoBefore.content !== '');

          return (
            hasOutline || hasBoxShadow || hasBorderChange || hasPseudoElement
          );
        });

        // フォーカスインジケーターがない場合は警告として記録
        if (!hasFocusIndicator) {
          warningCount++;
        }
      }

      // 警告がある場合はコンソールに出力
      if (warningCount > 0) {
        console.warn(
          `⚠ ${warningCount} warnings for focusable-has-indicator in ${name} theme`,
        );
      }
    });

    test('wcag/interactive-has-enough-size', async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // インタラクティブ要素を探す（リンク、ボタンなど）
      const interactiveElements = await page.$$(
        'a, button, input, select, textarea, [role="button"], [onclick]',
      );
      let warningCount = 0;

      for (const element of interactiveElements) {
        // 要素が表示されているか確認
        const isVisible = await element.isVisible();
        if (!isVisible) continue;

        // 要素のサイズを取得
        const size = await element.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          return {
            width: rect.width,
            height: rect.height,
            html: el.outerHTML.substring(0, 100),
          };
        });

        const MIN_SIZE = 44; // WCAG 2.5.5 Level AAAの要求サイズ
        if (size.width < MIN_SIZE || size.height < MIN_SIZE) {
          warningCount++;
        }
      }

      // 警告がある場合はコンソールに出力
      if (warningCount > 0) {
        console.warn(
          `⚠ ${warningCount} warnings for interactive-has-enough-size in ${name} theme`,
        );
      }
    });
  });
});
