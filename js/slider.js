function sliderOnSlide(e) {
                    kendoConsole.log("Slide :: new slide value is: " + e.value);
                }

                function sliderOnChange(e) {
                    kendoConsole.log("Change :: new value is: " + e.value);
                }

                function rangeSliderOnSlide(e) {
                    kendoConsole.log("Slide :: new slide value is: " + e.value.toString().replace(",", " - "));
                }

                function rangeSliderOnChange(e) {
                    kendoConsole.log("Change :: new value is: " + e.value.toString().replace(",", " - "));
                }

                $(document).ready(function() {
                    $("#slider").kendoSlider({
                        change: sliderOnChange,
                        slide: sliderOnSlide,
                        min: 0,
                        max: 30,
                        smallStep: 1,
                        largeStep: 10,
                        value: 18
                    });

                    $("#rangeslider").kendoRangeSlider({
                        change: rangeSliderOnChange,
                        slide: rangeSliderOnSlide,
                        min: 0,
                        max: 10,
                        smallStep: 1,
                        largeStep: 2,
                        tickPlacement: "both"
                    });
                });
