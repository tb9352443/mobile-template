module.export = {
    publicPath: './',
    css: {
        requireModuleExtension: false
    },
    // devServer: {
    //     proxy: {
    //         '/dev': {
    //             target: 'http://poly.luoliny.com',
    //             ws: true,
    //             changeOrigin: true,
    //         }
    //     }
    // }
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }

}