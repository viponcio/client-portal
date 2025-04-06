process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"en","title":"","cacheVersion":6,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]},"signup":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./signup/index.html","lang":"en","title":"Create Your Account","cacheVersion":6,"meta":[{"name":"title","content":"Create Your Account"},{"name":"description","content":"Sign up and create a new account with comprehensive user information"},{"name":"keywords","content":"signup, register, new account, user registration"},{"itemprop":"name","content":"Create Your Account"},{"itemprop":"description","content":"Sign up and create a new account with comprehensive user information"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Create Your Account"},{"name":"twitter:description","content":"Complete your registration with detailed personal information"},{"property":"og:title","content":"Create Your Account"},{"property":"og:description","content":"Complete your registration with detailed personal information"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/signup/"},{"rel":"alternate","hreflang":"en","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/signup/"}],"chunks":["chunk-vendors","chunk-common","signup"]},"login":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./login/index.html","lang":"en","title":"","cacheVersion":6,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/login/"}],"chunks":["chunk-vendors","chunk-common","login"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
