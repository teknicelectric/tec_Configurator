
// flush      



document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('NO-input').classList.remove('hidden');
            document.getElementById('NC-input').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#NO-btn') && !sibling.querySelector('#NC-btn')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

$(document).ready(function() {
    // Flush button click event
    $(".flush").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});


$(document).ready(function() {
    // Flush button click event
    $(".flushb").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});
// for second
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('secondinputno').classList.remove('hidden');
            document.getElementById('secondinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#secondnbtnno') && !sibling.querySelector('#secondnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });  
});


// for third

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('thirdinputno').classList.remove('hidden');
            document.getElementById('thirdinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#thirdnbtnno') && !sibling.querySelector('#thirdnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for fouth
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fourthinputno').classList.remove('hidden');
            document.getElementById('fourthinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fourthnbtnno') && !sibling.querySelector('#fourthnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for five
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fiveinputno').classList.remove('hidden');
            document.getElementById('fiveinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fivenbtnno') && !sibling.querySelector('#fivenbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for sixs
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('sixsinputno').classList.remove('hidden');
            document.getElementById('sixsinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#sixsnbtnno') && !sibling.querySelector('#sixsnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});



// flush end
// flush with arrow marking

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamNO-input').classList.remove('hidden');
            document.getElementById('fwamNC-input').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamNO-btn') && !sibling.querySelector('#fwamNC-btn')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

$(document).ready(function() {
    // Flush button click event
    $(".fwam").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});
// for second
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamsecondinputno').classList.remove('hidden');
            document.getElementById('fwamsecondinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamsecondnbtnno') && !sibling.querySelector('#fwamsecondnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for third

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamthirdinputno').classList.remove('hidden');
            document.getElementById('fwamthirdinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamthirdnbtnno') && !sibling.querySelector('#fwamthirdnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for fouth
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamfourthinputno').classList.remove('hidden');
            document.getElementById('fwamfourthinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamfourthnbtnno') && !sibling.querySelector('#fwamfourthnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for five
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamfiveinputno').classList.remove('hidden');
            document.getElementById('fwamfiveinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamfivenbtnno') && !sibling.querySelector('#fwamfivenbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for sixs
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('fwamsixsinputno').classList.remove('hidden');
            document.getElementById('fwamsixsinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#fwamsixsnbtnno') && !sibling.querySelector('#fwamsixsnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// flush with arrow marking close
// projection

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('ProjNO-input').classList.remove('hidden');
            document.getElementById('ProjNC-input').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#ProjNO-btn') && !sibling.querySelector('#ProjNC-btn')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

$(document).ready(function() {
    // Flush button click event
    $(".Proj").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});
// for second
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('Projsecondinputno').classList.remove('hidden');
            document.getElementById('Projsecondinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#Projsecondnbtnno') && !sibling.querySelector('#Projsecondnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for third

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('Projthirdinputno').classList.remove('hidden');
            document.getElementById('Projthirdinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#Projthirdnbtnno') && !sibling.querySelector('#Projthirdnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for fouth
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('Projfourthinputno').classList.remove('hidden');
            document.getElementById('Projfourthinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#Projfourthnbtnno') && !sibling.querySelector('#Projfourthnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for five
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('Projfiveinputno').classList.remove('hidden');
            document.getElementById('Projfiveinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#Projfivenbtnno') && !sibling.querySelector('#Projfivenbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for sixs
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('Projsixsinputno').classList.remove('hidden');
            document.getElementById('Projsixsinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#Projsixsnbtnno') && !sibling.querySelector('#Projsixsnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// projectiong close

// frra

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frraNO-input').classList.remove('hidden');
            document.getElementById('frraNC-input').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frraNO-btn') && !sibling.querySelector('#frraNC-btn')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

$(document).ready(function() {
    // Flush button click event
    $(".frra").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});
// for second
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frrasecondinputno').classList.remove('hidden');
            document.getElementById('frrasecondinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frrasecondnbtnno') && !sibling.querySelector('#frrasecondnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for third

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frrathirdinputno').classList.remove('hidden');
            document.getElementById('frrathirdinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frrathirdnbtnno') && !sibling.querySelector('#frrathirdnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for fouth
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frrafourthinputno').classList.remove('hidden');
            document.getElementById('frrafourthinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frrafourthnbtnno') && !sibling.querySelector('#frrafourthnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for five
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frrafiveinputno').classList.remove('hidden');
            document.getElementById('frrafiveinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frrafivenbtnno') && !sibling.querySelector('#frrafivenbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for sixs
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('frrasixsinputno').classList.remove('hidden');
            document.getElementById('frrasixsinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#frrasixsnbtnno') && !sibling.querySelector('#frrasixsnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// frr close


// booted 

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootNO-input').classList.remove('hidden');
            document.getElementById('bootNC-input').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootNO-btn') && !sibling.querySelector('#bootNC-btn')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

$(document).ready(function() {
    // Flush button click event
    $(".boot").click(function() {
        // Use Ajax to simulate refreshing the content
        $.ajax({
            url: window.location.href, // Reload the current page (or you can use a specific URL to fetch content)
            type: 'GET',
            success: function(response) {
                // Assuming the container with the id 'output' holds the content you want to refresh
                $(".output").html($(response).find(".output").html());
            },
            error: function(xhr, status, error) {
                console.error("Error while refreshing content:", error);
            }
        });
    });
});
// for second
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootsecondinputno').classList.remove('hidden');
            document.getElementById('bootsecondinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootsecondnbtnno') && !sibling.querySelector('#bootsecondnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for third

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootthirdinputno').classList.remove('hidden');
            document.getElementById('bootthirdinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootthirdnbtnno') && !sibling.querySelector('#bootthirdnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for fouth
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootfourthinputno').classList.remove('hidden');
            document.getElementById('bootfourthinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootfourthnbtnno') && !sibling.querySelector('#bootfourthnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});
// for five
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootfiveinputno').classList.remove('hidden');
            document.getElementById('bootfiveinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootfivenbtnno') && !sibling.querySelector('#bootfivenbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

// for sixs
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.option-group');
        const siblings = parent.parentNode.querySelectorAll(':scope > .option-group');

        
        if (button.id === 'assembly-yes-btn') {
          
            document.getElementById('bootsixsinputno').classList.remove('hidden');
            document.getElementById('bootsixsinputnc').classList.remove('hidden');
            return;
        }

        
        siblings.forEach(sibling => {
            if (sibling !== parent && !sibling.querySelector('#bootsixsnbtnno') && !sibling.querySelector('#bootsixsnbtnnc')) {
                sibling.style.display = 'none';
            }
        });

        
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });

    
});

