#!/bin/bash

ICON_DIR="./Icons.xcassets"

RESOURCE_ENUM_NAME="SpindleIconResource"
RESOURCE_SWIFT_FILE="$RESOURCE_ENUM_NAME.swift"

EXTENSION_SWIFT_NAME="Image+SpindleIcon.swift"

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

write_header_comment() {
    echo "//" > $1
    echo "//  $1" >> $1
    echo "//" >> $1
    echo "//" >> $1
    echo "//  Created by generate_SpindleIcon.sh" >> $1
    echo "//" >> $1
}

generate_swift() {
    $(write_header_comment "$RESOURCE_SWIFT_FILE")
    echo "" >> $RESOURCE_SWIFT_FILE
    echo "import Foundation" >> $RESOURCE_SWIFT_FILE
    echo "" >> $RESOURCE_SWIFT_FILE
    echo "public enum $RESOURCE_ENUM_NAME {" >> $RESOURCE_SWIFT_FILE
    
    $(write_header_comment "$EXTENSION_SWIFT_NAME")
    echo "" >> $EXTENSION_SWIFT_NAME
    echo "import SwiftUI" >> $EXTENSION_SWIFT_NAME
    echo "" >> $EXTENSION_SWIFT_NAME
    echo "public extension Image {" >> $EXTENSION_SWIFT_NAME
    echo "    enum SpindleIcon {}" >> $EXTENSION_SWIFT_NAME
    echo "}" >> $EXTENSION_SWIFT_NAME
    echo "" >> $EXTENSION_SWIFT_NAME
    echo "public extension Image.SpindleIcon {" >> $EXTENSION_SWIFT_NAME

    asset_cases=()
    directories=($(find "$ICON_DIR" -name "*.imageset" -maxdepth 1 -type d | sort))
    total_dirs=${#directories[@]}
    counter=0
    for dir in "${directories[@]}"; do
        counter=$((counter + 1))
        name=$(basename "$dir" .imageset)
        # キャメルケースに変換
        # 名前が数字で始まる場合、先頭にアンダースコアを追加
        if [[ $name =~ ^[0-9] ]]; then
            case_name="_$(to_camel_case "$name")"
        else
            case_name=$(to_camel_case "$name")
        fi

        echo "    case $case_name" >> $RESOURCE_SWIFT_FILE
            
        echo "    static var $case_name: Image {" >> $EXTENSION_SWIFT_NAME
        echo "        Image(SpindleIconResource.$case_name.assetName, bundle: SpindleIconResource.$case_name.bundle)" >> $EXTENSION_SWIFT_NAME
        echo "    }" >> $EXTENSION_SWIFT_NAME

        asset_cases+=("case .$case_name: \"$name\"")
        
        if [ "$counter" -ne "$total_dirs" ]; then
            echo "" >> $EXTENSION_SWIFT_NAME
        fi
    done

    echo "}" >> $RESOURCE_SWIFT_FILE
    echo "}" >> $EXTENSION_SWIFT_NAME

    echo "" >> $RESOURCE_SWIFT_FILE
    echo "extension $RESOURCE_ENUM_NAME {" >> $RESOURCE_SWIFT_FILE
    echo "    package var assetName: String {" >> $RESOURCE_SWIFT_FILE
    echo "        switch self {" >> $RESOURCE_SWIFT_FILE

    for asset_case in "${asset_cases[@]}"; do
        echo "        $asset_case" >> $RESOURCE_SWIFT_FILE
    done

    echo "        }" >> $RESOURCE_SWIFT_FILE
    echo "    }" >> $RESOURCE_SWIFT_FILE
    echo "" >> $RESOURCE_SWIFT_FILE
    echo "    package var bundle: Bundle {" >> $RESOURCE_SWIFT_FILE
    echo "        Bundle.module" >> $RESOURCE_SWIFT_FILE
    echo "    }" >> $RESOURCE_SWIFT_FILE
    echo "}" >> $RESOURCE_SWIFT_FILE
}

generate_swift
