var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var helpers = require('./helpers');
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: isProd ? './src/main.aot.ts' : './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'babel-loader',
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: isProd ?
                            helpers.root('tsconfig-aot.json') :
                            helpers.root('tsconfig.json')
                    }
                },
                'angular2-template-loader'
            ],
            exclude: [/node_modules/]
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        // {
        //     test: /\.css$/,
        //     exclude: helpers.root('src', 'app'),
        //     use: ExtractTextPlugin.extract({
        //         fallback: 'style-loader',
        //         use: [
        //             { loader: 'css-loader?sourceMap' }
        //         ]
        //     })
        // },
        // {
        //     test: /\.css$/,
        //     include: helpers.root('src', 'app'),
        //     loader: 'raw-loader'
        // },

        //https://www.npmjs.com/package/to-string-loader
        {
            test: /\.(scss|css)$/,
            use: ['to-string-loader'].concat(ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
            }))
        },
        // Bootstrap 4
        {
            test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
        }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin("app.css"),
        new webpack.ProvidePlugin({
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
        })
    ]
};