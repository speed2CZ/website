module.exports = {
    dev: {
        options: {
            compress: false,
            mangle: false,
            beautify: true
        },
        files: {
            'public/js/bottom.min.js': 'public/js/bottom.min.js',
            'public/js/calendar.min.js': 'public/js/calendar.min.js',
            'public/js/leaderboard.min.js': 'public/js/leaderboard.min.js',
            'public/js/account.min.js': 'public/js/account.min.js',
            'public/js/blog.min.js': 'public/js/blog.min.js'
        }
    },
    dist: {
        options:{
            compress: true,
            mangle: true
        },
        files: {
            'public/js/bottom.min.js': 'public/js/bottom.min.js',
            'public/js/calendar.min.js': 'public/js/calendar.min.js',
            'public/js/leaderboard.min.js': 'public/js/leaderboard.min.js',
            'public/js/account.min.js': 'public/js/account.min.js',
            'public/js/blog.min.js': 'public/js/blog.min.js'
        }
    }
};
