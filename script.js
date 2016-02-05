//noinspection ThisExpressionReferencesGlobalObjectJS
/**
 * Created by azder on 2015-10-13.
 */


(function (window) {

    // ALWAYS
    'use strict';


    window.slideshow = remark.create({

        ratio: '16:9',

        navigation: {
            scroll: false,
            touch:  false,
            click:  false
        },

        // Customize slide number label, either using a format string..
        slideNumberFormat: '%current%',// of %total%',
        // .. or by using a format function
        //        slideNumberFormat: function (current, total) {
        //            return 'Slide ' + current + ' of ' + total;
        //        },

        // Enable or disable counting of incremental slides in the slide counting
        countIncrementalSlides: false,
        highlightLanguage:      'javascript',
        highlightStyle:         'idea',
        highlightLines:         true,
        highlightSpans:         false

    });

}(this));
