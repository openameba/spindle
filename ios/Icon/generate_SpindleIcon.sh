#!/bin/bash

ICON_DIR="./Icons.xcassets"
ENUM_NAME="SpindleIcon"
SWIFT_FILE="$ENUM_NAME.swift"

to_camel_case() {
    local input="$1"
    local result=""
    local IFS='_'
    read -ra words <<< "$input"
    for word in "${words[@]}"; do
        result="${result}$(tr '[:lower:]' '[:upper:]' <<< ${word:0:1})${word:1}"
    done
    result="$(tr '[:upper:]' '[:lower:]' <<< ${result:0:1})${result:1}"
    echo "$result"
}

generate_header_comment() {
    echo "//" > $SWIFT_FILE
    echo "//  $ENUM_NAME.swift" >> $SWIFT_FILE
    echo "//" >> $SWIFT_FILE
    echo "//" >> $SWIFT_FILE
    echo "//  Created by generate_SpindleIcon.sh" >> $SWIFT_FILE
    echo "//" >> $SWIFT_FILE
}

generate_enum() {
    # assetName作成用
    case_name_pairs=()

    echo "public enum $ENUM_NAME {" >> $SWIFT_FILE

    for dir in "$ICON_DIR"/*.imageset; do
        if [ -d "$dir" ]; then
            name=$(basename "$dir" .imageset)
            # キャメルケースに変換
            # 名前が数字で始まる場合、先頭にアンダースコアを追加
            if [[ $name =~ ^[0-9] ]]; then
                case_name="_$(to_camel_case "$name")"
            else
                case_name=$(to_camel_case "$name")
            fi

            echo "    case $case_name" >> $SWIFT_FILE

            case_name_pairs+=("$case_name=$name")
        fi
    done

    echo "}" >> $SWIFT_FILE

    echo "" >> $SWIFT_FILE
    echo "extension $ENUM_NAME {" >> $SWIFT_FILE
    echo "    var assetName: String {" >> $SWIFT_FILE
    echo "        switch self {" >> $SWIFT_FILE

    for case_name_pair in "${case_name_pairs[@]}"; do
        case_name="${case_name_pair%%=*}"
        asset_name="${case_name_pair#*=}"
        echo "        case .$case_name: \"$asset_name\"" >> $SWIFT_FILE
    done
    
    echo "        }" >> $SWIFT_FILE
    echo "    }" >> $SWIFT_FILE
    echo "}" >> $SWIFT_FILE
}

generate_header_comment
echo "" >> $SWIFT_FILE
generate_enum
