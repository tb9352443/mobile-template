module.exports = {
    // presets: [
    //     '@vue/cli-plugin-babel/preset',
    // ],
    // plugins: [
    //     ["component", {
    //         "libraryName": "mint-ui",
    //         "style": true
    //     }]
    // ]
    "presets": [
        ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
}