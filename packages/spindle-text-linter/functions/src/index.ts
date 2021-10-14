import * as functions from 'firebase-functions';
import { TextFixEngine, TextLintEngine } from 'textlint';

function fixText(text: string) {
  const fixEngine = new TextFixEngine();
  const lintEngine = new TextLintEngine();

  return Promise.all([
    fixEngine.executeOnText(text),
    lintEngine.executeOnText(text),
  ]).then(([fixResult, lintResult]) => {
    const fixedRules = lintResult[0].messages.filter((message) => message.fix);
    const unresolvedWarnings = lintResult[0].messages.filter(
      (message) => !message.fix,
    );
    const errors = unresolvedWarnings.filter(({ severity }) => severity === 2);
    const warnings = unresolvedWarnings.filter(
      ({ severity }) => severity === 1,
    );

    return {
      output: fixResult[0].output,
      fixedRules,
      errors,
      warnings,
    };
  });
}

function lintText(text: string) {
  const lintEngine = new TextLintEngine();

  return lintEngine.executeOnText(text).then((lintResult) => {
    const messages = lintResult[0].messages;
    const errors = messages.filter(({ severity }) => severity === 2);
    const warnings = messages.filter(({ severity }) => severity === 1);

    return {
      errors,
      warnings,
    };
  });
}

export const fix = functions
  .region('asia-northeast1')
  .runWith({
    timeoutSeconds: 300,
    memory: '1GB',
  })
  .https.onRequest((req: functions.Request, res: functions.Response) => {
    const text = req.query.text || req.body.text;

    if (!text) {
      res.status(400).json({
        message: 'No text found',
      });
      return;
    }

    const formattedText = text.replace(/\\n/g, '\u2028'); // Apply line breaks

    fixText(formattedText)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });

export const lint = functions
  .region('asia-northeast1')
  .runWith({
    timeoutSeconds: 300,
    memory: '1GB',
  })
  .https.onRequest((req: functions.Request, res: functions.Response) => {
    const text = req.query.text || req.body.text;

    if (!text) {
      res.status(400).json({
        message: 'No text found',
      });
      return;
    }

    const formattedText = text.replace(/\\n/g, '\u2028'); // Apply line breaks

    lintText(formattedText)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
