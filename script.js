
// Ensure NO and NC are always visible and displayed together
document.getElementById('NO-btn').addEventListener('click', function () {
    document.getElementById('NO-input').classList.remove('hidden');
    document.getElementById('NC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('NC-btn').addEventListener('click', function () {
    document.getElementById('NC-input').classList.remove('hidden');
    document.getElementById('NO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const positiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('NO-input').addEventListener('input', positiveNumberOnly);
document.getElementById('NC-input').addEventListener('input', positiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function generateCode() {
    const noValue = document.getElementById('NO-input').value;
    const ncValue = document.getElementById('NC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('whiteimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF111",
            "12": "P2PSF112",
            "10": "P2PSF110",
            "01": "P2PSF101",
            "21": "P2PSF121",
            "23": "P2PSF123",
            "22": "P2PSF122",
            "33": "P2PSF133",
            "32": "P2PSF132",
            "13": "P2PSF113",
            "14": "P2PSF114",
            "15": "P2PSF115",
            "24": "P2PSF124",
            "31": "P2PSF131",
            "41": "P2PSF141",
            "42": "P2PSF142",
            "51": "P2PSF151",
            "00": "P2PSF100",
            "20": "P2PSF120",
            "30": "P2PSF130",
            "40": "P2PSF140",
            "50": "P2PSF150",
            "60": "P2PSF160",
            "02": "P2PSF102",
            "03": "P2PSF103",
            "04": "P2PSF104",
            "05": "P2PSF105",
            "06": "P2PSF106"
        };

        

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('NO-input').addEventListener('input', generateCode);
document.getElementById('NC-input').addEventListener('input', generateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

//   ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('ENO-btn').addEventListener('click', function () {
    document.getElementById('ENO-input').classList.remove('hidden');
    document.getElementById('ENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('ENC-btn').addEventListener('click', function () {
    document.getElementById('ENC-input').classList.remove('hidden');
    document.getElementById('ENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('ENO-input').addEventListener('input', EpositiveNumberOnly);
document.getElementById('ENC-input').addEventListener('input', EpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function EgenerateCode() {
    const noValue = document.getElementById('ENO-input').value;
    const ncValue = document.getElementById('ENC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('whiteimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF111",
            "12": "EP2PSF112",
            "10": "EP2PSF110",
            "01": "EP2PSF101",
            "21": "EP2PSF121",
            "23": "EP2PSF123",
            "22": "EP2PSF122",
            "33": "EP2PSF133",
            "32": "EP2PSF132",
            "13": "EP2PSF113",
            "14": "EP2PSF114",
            "15": "EP2PSF115",
            "24": "EP2PSF124",
            "31": "EP2PSF131",
            "41": "EP2PSF141",
            "42": "EP2PSF142",
            "51": "EP2PSF151",
            "00": "EP2PSF100",
            "20": "EP2PSF120",
            "30": "EP2PSF130",
            "40": "EP2PSF140",
            "50": "EP2PSF150",
            "60": "EP2PSF160",
            "02": "EP2PSF102",
            "03": "EP2PSF103",
            "04": "EP2PSF104",
            "05": "EP2PSF105",
            "06": "EP2PSF106"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('ENO-input').addEventListener('input', EgenerateCode);
document.getElementById('ENC-input').addEventListener('input', EgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('secondnbtnno').addEventListener('click', function () {
    document.getElementById('secondinputno').classList.remove('hidden');
    document.getElementById('secondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('secondnbtnnc').addEventListener('click', function () {
    document.getElementById('secondinputnc').classList.remove('hidden');
    document.getElementById('secondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const SpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('secondinputno').addEventListener('input', SpositiveNumberOnly);
document.getElementById('secondinputnc').addEventListener('input', SpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function SgenerateCode() {
    const noValue = document.getElementById('secondinputno').value;
    const ncValue = document.getElementById('secondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('blackimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF211",
            "12": "P2PSF212",
            "10": "P2PSF210",
            "01": "P2PSF201",
            "21": "P2PSF221",
            "23": "P2PSF223",
            "22": "P2PSF222",
            "33": "P2PSF233",
            "32": "P2PSF232",
            "13": "P2PSF213",
            "14": "P2PSF214",
            "15": "P2PSF215",
            "24": "P2PSF224",
            "31": "P2PSF231",
            "41": "P2PSF241",
            "42": "P2PSF242",
            "51": "P2PSF251",
            "00": "P2PSF200",
            "20": "P2PSF220",
            "30": "P2PSF230",
            "40": "P2PSF240",
            "50": "P2PSF250",
            "60": "P2PSF260",
            "02": "P2PSF202",
            "03": "P2PSF203",
            "04": "P2PSF204",
            "05": "P2PSF205",
            "06": "P2PSF206"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('secondinputno').addEventListener('input', SgenerateCode);
document.getElementById('secondinputnc').addEventListener('input', SgenerateCode);

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('Esecondnbtnno').addEventListener('click', function () {
    document.getElementById('Esecondinputno').classList.remove('hidden');
    document.getElementById('Esecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Esecondnbtnnc').addEventListener('click', function () {
    document.getElementById('Esecondinputnc').classList.remove('hidden');
    document.getElementById('Esecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const ESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Esecondinputno').addEventListener('input', ESpositiveNumberOnly);
document.getElementById('Esecondinputnc').addEventListener('input', ESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function ESgenerateCode() {
    const noValue = document.getElementById('Esecondinputno').value;
    const ncValue = document.getElementById('Esecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('blackimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF211",
            "12": "EP2PSF212",
            "10": "EP2PSF210",
            "01": "EP2PSF201",
            "21": "EP2PSF221",
            "23": "EP2PSF223",
            "22": "EP2PSF222",
            "33": "EP2PSF233",
            "32": "EP2PSF232",
            "13": "EP2PSF213",
            "14": "EP2PSF214",
            "15": "EP2PSF215",
            "24": "EP2PSF224",
            "31": "EP2PSF231",
            "41": "EP2PSF241",
            "42": "EP2PSF242",
            "51": "EP2PSF251",
            "00": "EP2PSF200",
            "20": "EP2PSF220",
            "30": "EP2PSF230",
            "40": "EP2PSF240",
            "50": "EP2PSF250",
            "60": "EP2PSF260",
            "02": "EP2PSF202",
            "03": "EP2PSF203",
            "04": "EP2PSF204",
            "05": "EP2PSF205",
            "06": "EP2PSF206"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('Esecondinputno').addEventListener('input', ESgenerateCode);
document.getElementById('Esecondinputnc').addEventListener('input', ESgenerateCode);

// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('thirdnbtnno').addEventListener('click', function () {
    document.getElementById('thirdinputno').classList.remove('hidden');
    document.getElementById('thirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('thirdnbtnnc').addEventListener('click', function () {
    document.getElementById('thirdinputnc').classList.remove('hidden');
    document.getElementById('thirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const tpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('thirdinputno').addEventListener('input', tpositiveNumberOnly);
document.getElementById('thirdinputnc').addEventListener('input', tpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function ggenerateCode() {
    const noValue = document.getElementById('thirdinputno').value;
    const ncValue = document.getElementById('thirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('greenimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF311",
            "12": "P2PSF312",
            "10": "P2PSF310",
            "01": "P2PSF301",
            "21": "P2PSF321",
            "23": "P2PSF323",
            "22": "P2PSF322",
            "33": "P2PSF333",
            "32": "P2PSF332",
            "13": "P2PSF313",
            "14": "P2PSF314",
            "15": "P2PSF315",
            "24": "P2PSF324",
            "31": "P2PSF331",
            "41": "P2PSF341",
            "42": "P2PSF342",
            "51": "P2PSF351",
            "00": "P2PSF300",
            "20": "P2PSF320",
            "30": "P2PSF330",
            "40": "P2PSF340",
            "50": "P2PSF350",
            "60": "P2PSF360",
            "02": "P2PSF302",
            "03": "P2PSF303",
            "04": "P2PSF304",
            "05": "P2PSF305",
            "06": "P2PSF306"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('thirdinputno').addEventListener('input', ggenerateCode);
document.getElementById('thirdinputnc').addEventListener('input', ggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('Ethirdnbtnno').addEventListener('click', function () {
    document.getElementById('Ethirdinputno').classList.remove('hidden');
    document.getElementById('Ethirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Ethirdnbtnnc').addEventListener('click', function () {
    document.getElementById('Ethirdinputnc').classList.remove('hidden');
    document.getElementById('Ethirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Ethirdinputno').addEventListener('input', EtpositiveNumberOnly);
document.getElementById('Ethirdinputnc').addEventListener('input', EtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function EggenerateCode() {
    const noValue = document.getElementById('Ethirdinputno').value;
    const ncValue = document.getElementById('Ethirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('greenimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF311",
            "12": "EP2PSF312",
            "10": "EP2PSF310",
            "01": "EP2PSF301",
            "21": "EP2PSF321",
            "23": "EP2PSF323",
            "22": "EP2PSF322",
            "33": "EP2PSF333",
            "32": "EP2PSF332",
            "13": "EP2PSF313",
            "14": "EP2PSF314",
            "15": "EP2PSF315",
            "24": "EP2PSF324",
            "31": "EP2PSF331",
            "41": "EP2PSF341",
            "42": "EP2PSF342",
            "51": "EP2PSF351",
            "00": "EP2PSF300",
            "20": "EP2PSF320",
            "30": "EP2PSF330",
            "40": "EP2PSF340",
            "50": "EP2PSF350",
            "60": "EP2PSF360",
            "02": "EP2PSF302",
            "03": "EP2PSF303",
            "04": "EP2PSF304",
            "05": "EP2PSF305",
            "06": "EP2PSF306"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('Ethirdinputno').addEventListener('input', EggenerateCode);
document.getElementById('Ethirdinputnc').addEventListener('input', EggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('whiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('fourthnbtnno').addEventListener('click', function () {
    document.getElementById('fourthinputno').classList.remove('hidden');
    document.getElementById('fourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fourthnbtnnc').addEventListener('click', function () {
    document.getElementById('fourthinputnc').classList.remove('hidden');
    document.getElementById('fourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const redgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fourthinputno').addEventListener('input', redgreenpositiveNumberOnly);
document.getElementById('fourthinputnc').addEventListener('input', redgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function redgreengenerateCode() {
    const noValue = document.getElementById('fourthinputno').value;
    const ncValue = document.getElementById('fourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('redimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF411",
            "12": "P2PSF412",
            "10": "P2PSF410",
            "01": "P2PSF401",
            "21": "P2PSF421",
            "23": "P2PSF423",
            "22": "P2PSF422",
            "33": "P2PSF433",
            "32": "P2PSF432",
            "13": "P2PSF413",
            "14": "P2PSF414",
            "15": "P2PSF415",
            "24": "P2PSF424",
            "31": "P2PSF431",
            "41": "P2PSF441",
            "42": "P2PSF442",
            "51": "P2PSF451",
            "00": "P2PSF400",
            "20": "P2PSF420",
            "30": "P2PSF430",
            "40": "P2PSF440",
            "50": "P2PSF450",
            "60": "P2PSF460",
            "02": "P2PSF402",
            "03": "P2PSF403",
            "04": "P2PSF404",
            "05": "P2PSF405",
            "06": "P2PSF406"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fourthinputno').addEventListener('input', redgreengenerateCode);
document.getElementById('fourthinputnc').addEventListener('input', redgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('redimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// economay
// Ensure NO and NC are always visible and displayed together
document.getElementById('Efourthnbtnno').addEventListener('click', function () {
    document.getElementById('Efourthinputno').classList.remove('hidden');
    document.getElementById('Efourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Efourthnbtnnc').addEventListener('click', function () {
    document.getElementById('Efourthinputnc').classList.remove('hidden');
    document.getElementById('Efourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Efourthinputno').addEventListener('input', EredgreenpositiveNumberOnly);
document.getElementById('Efourthinputnc').addEventListener('input', EredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function EredgreengenerateCode() {
    const noValue = document.getElementById('Efourthinputno').value;
    const ncValue = document.getElementById('Efourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('redimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF411",
            "12": "EP2PSF412",
            "10": "EP2PSF410",
            "01": "EP2PSF401",
            "21": "EP2PSF421",
            "23": "EP2PSF423",
            "22": "EP2PSF422",
            "33": "EP2PSF433",
            "32": "EP2PSF432",
            "13": "EP2PSF413",
            "14": "EP2PSF414",
            "15": "EP2PSF415",
            "24": "EP2PSF424",
            "31": "EP2PSF431",
            "41": "EP2PSF441",
            "42": "EP2PSF442",
            "51": "EP2PSF451",
            "00": "EP2PSF400",
            "20": "EP2PSF420",
            "30": "EP2PSF430",
            "40": "EP2PSF440",
            "50": "EP2PSF450",
            "60": "EP2PSF460",
            "02": "EP2PSF402",
            "03": "EP2PSF403",
            "04": "EP2PSF404",
            "05": "EP2PSF405",
            "06": "EP2PSF406"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('Efourthinputno').addEventListener('input', EredgreengenerateCode);
document.getElementById('Efourthinputnc').addEventListener('input', EredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('redimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('fivenbtnno').addEventListener('click', function () {
    document.getElementById('fiveinputno').classList.remove('hidden');
    document.getElementById('fiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fivenbtnnc').addEventListener('click', function () {
    document.getElementById('fiveinputnc').classList.remove('hidden');
    document.getElementById('fiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const ypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fiveinputno').addEventListener('input', ypositiveNumberOnly);
document.getElementById('fiveinputnc').addEventListener('input', ypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bluegreengenerateCode() {
    const noValue = document.getElementById('fiveinputno').value;
    const ncValue = document.getElementById('fiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('blueimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF611",
            "12": "P2PSF612",
            "10": "P2PSF610",
            "01": "P2PSF601",
            "21": "P2PSF621",
            "23": "P2PSF623",
            "22": "P2PSF622",
            "33": "P2PSF633",
            "32": "P2PSF632",
            "13": "P2PSF613",
            "14": "P2PSF614",
            "15": "P2PSF615",
            "24": "P2PSF624",
            "31": "P2PSF631",
            "41": "P2PSF641",
            "42": "P2PSF642",
            "51": "P2PSF651",
            "00": "P2PSF600",
            "20": "P2PSF620",
            "30": "P2PSF630",
            "40": "P2PSF640",
            "50": "P2PSF650",
            "60": "P2PSF660",
            "02": "P2PSF602",
            "03": "P2PSF603",
            "04": "P2PSF604",
            "05": "P2PSF605",
            "06": "P2PSF606"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fiveinputno').addEventListener('input', bluegreengenerateCode);
document.getElementById('fiveinputnc').addEventListener('input', bluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('blueimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// economy
// Ensure NO and NC are always visible and displayed together
document.getElementById('Efivenbtnno').addEventListener('click', function () {
    document.getElementById('Efiveinputno').classList.remove('hidden');
    document.getElementById('Efiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Efivenbtnnc').addEventListener('click', function () {
    document.getElementById('Efiveinputnc').classList.remove('hidden');
    document.getElementById('Efiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Efiveinputno').addEventListener('input', EypositiveNumberOnly);
document.getElementById('Efiveinputnc').addEventListener('input', EypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function EbluegreengenerateCode() {
    const noValue = document.getElementById('Efiveinputno').value;
    const ncValue = document.getElementById('Efiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('blueimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF611",
            "12": "EP2PSF612",
            "10": "EP2PSF610",
            "01": "EP2PSF601",
            "21": "EP2PSF621",
            "23": "EP2PSF623",
            "22": "EP2PSF622",
            "33": "EP2PSF633",
            "32": "EP2PSF632",
            "13": "EP2PSF613",
            "14": "EP2PSF614",
            "15": "EP2PSF615",
            "24": "EP2PSF624",
            "31": "EP2PSF631",
            "41": "EP2PSF641",
            "42": "EP2PSF642",
            "51": "EP2PSF651",
            "00": "EP2PSF600",
            "20": "EP2PSF620",
            "30": "EP2PSF630",
            "40": "EP2PSF640",
            "50": "EP2PSF650",
            "60": "EP2PSF660",
            "02": "EP2PSF602",
            "03": "EP2PSF603",
            "04": "EP2PSF604",
            "05": "EP2PSF605",
            "06": "EP2PSF606"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('Efiveinputno').addEventListener('input', EbluegreengenerateCode);
document.getElementById('Efiveinputnc').addEventListener('input', EbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('blueimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('sixsnbtnno').addEventListener('click', function () {
    document.getElementById('sixsinputno').classList.remove('hidden');
    document.getElementById('sixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('sixsnbtnnc').addEventListener('click', function () {
    document.getElementById('sixsinputnc').classList.remove('hidden');
    document.getElementById('sixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const yellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('sixsinputno').addEventListener('input', yellowPositiveNumberOnly);
document.getElementById('sixsinputnc').addEventListener('input', yellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function yellowGenerateCode() {
    const noValue = document.getElementById('sixsinputno').value;
    const ncValue = document.getElementById('sixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('yellowimageContainer');
    const noImageContainer = document.getElementById('noimageContainer');
    const ncImageContainer = document.getElementById('ncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('plus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF811",
            "12": "P2PSF812",
            "10": "P2PSF810",
            "01": "P2PSF801",
            "21": "P2PSF821",
            "23": "P2PSF823",
            "22": "P2PSF822",
            "33": "P2PSF833",
            "32": "P2PSF832",
            "13": "P2PSF813",
            "14": "P2PSF814",
            "15": "P2PSF815",
            "24": "P2PSF824",
            "31": "P2PSF831",
            "41": "P2PSF841",
            "42": "P2PSF842",
            "51": "P2PSF851",
            "00": "P2PSF800",
            "20": "P2PSF820",
            "30": "P2PSF830",
            "40": "P2PSF840",
            "50": "P2PSF850",
            "60": "P2PSF860",
            "02": "P2PSF802",
            "03": "P2PSF803",
            "04": "P2PSF804",
            "05": "P2PSF805",
            "06": "P2PSF806"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('sixsinputno').addEventListener('input', yellowGenerateCode);
document.getElementById('sixsinputnc').addEventListener('input', yellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('noimageContainer').classList.add('hidden');
    document.getElementById('ncimageContainer').classList.add('hidden');
    document.getElementById('yellowimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('Esixsnbtnno').addEventListener('click', function () {
    document.getElementById('Esixsinputno').classList.remove('hidden');
    document.getElementById('Esixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('Esixsnbtnnc').addEventListener('click', function () {
    document.getElementById('Esixsinputnc').classList.remove('hidden');
    document.getElementById('Esixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const EyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('Esixsinputno').addEventListener('input', EyellowPositiveNumberOnly);
document.getElementById('Esixsinputnc').addEventListener('input', EyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function EyellowGenerateCode() {
    const noValue = document.getElementById('Esixsinputno').value;
    const ncValue = document.getElementById('Esixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('yellowimageContainer');
    const noImageContainer = document.getElementById('EnoimageContainer');
    const ncImageContainer = document.getElementById('EncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('plus1');
    const plus2 = document.getElementById('Eplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF811",
            "12": "EP2PSF812",
            "10": "EP2PSF810",
            "01": "EP2PSF801",
            "21": "EP2PSF821",
            "23": "EP2PSF823",
            "22": "EP2PSF822",
            "33": "EP2PSF833",
            "32": "EP2PSF832",
            "13": "EP2PSF813",
            "14": "EP2PSF814",
            "15": "EP2PSF815",
            "24": "EP2PSF824",
            "31": "EP2PSF831",
            "41": "EP2PSF841",
            "42": "EP2PSF842",
            "51": "EP2PSF851",
            "00": "EP2PSF800",
            "20": "EP2PSF820",
            "30": "EP2PSF830",
            "40": "EP2PSF840",
            "50": "EP2PSF850",
            "60": "EP2PSF860",
            "02": "EP2PSF802",
            "03": "EP2PSF803",
            "04": "EP2PSF804",
            "05": "EP2PSF805",
            "06": "EP2PSF806"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('Esixsinputno').addEventListener('input', EyellowGenerateCode);
document.getElementById('Esixsinputnc').addEventListener('input', EyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('yellowimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// *********************************************************************************************************************************

// second model


// Ensure NO and NC are always visible and displayed together
document.getElementById('fwaNO-btn').addEventListener('click', function () {
    document.getElementById('fwaNO-input').classList.remove('hidden');
    document.getElementById('fwaNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwaNC-btn').addEventListener('click', function () {
    document.getElementById('fwaNC-input').classList.remove('hidden');
    document.getElementById('fwaNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const fwapositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwaNO-input').addEventListener('input', fwapositiveNumberOnly);
document.getElementById('fwaNC-input').addEventListener('input', fwapositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function fwagenerateCode() {
    const noValue = document.getElementById('fwaNO-input').value;
    const ncValue = document.getElementById('fwaNC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('fwawhiteimageContainer');
    const noImageContainer = document.getElementById('fwanoimageContainer');
    const ncImageContainer = document.getElementById('fwancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('fwaplus1');
    const plus2 = document.getElementById('fwaplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF1A11",
            "10": "P2PSF1A10",
            "01": "P2PSF1A01",
            "21": "P2PSF1A21",
            "23": "P2PSF1A23",
            "22": "P2PSF1A22",
            "33": "P2PSF1A33",
            "32": "P2PSF1A32",
            "13": "P2PSF1A13",
            "14": "P2PSF1A14",
            "15": "P2PSF1A15",
            "24": "P2PSF1A24",
            "31": "P2PSF1A31",
            "41": "P2PSF1A41",
            "42": "P2PSF1A42",
            "51": "P2PSF1A51",
            "00": "P2PSF1A00",
            "20": "P2PSF1A20",
            "30": "P2PSF1A30",
            "40": "P2PSF1A40",
            "50": "P2PSF1A50",
            "60": "P2PSF1A60",
            "02": "P2PSF1A02",
            "03": "P2PSF1A03",
            "04": "P2PSF1A04",
            "05": "P2PSF1A05",
            "06": "P2PSF1A06",
            "12": "P2PSF1A12"    
        };

        

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fwaNO-input').addEventListener('input', fwagenerateCode);
document.getElementById('fwaNC-input').addEventListener('input', fwagenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('fwanoimageContainer').classList.add('hidden');
    document.getElementById('fwancimageContainer').classList.add('hidden');
    document.getElementById('fwawhiteimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// economy
// Ensure NO and NC are always visible and displayed together
document.getElementById('fwaENO-btn').addEventListener('click', function () {
    document.getElementById('fwaENO-input').classList.remove('hidden');
    document.getElementById('fwaENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwaENC-btn').addEventListener('click', function () {
    document.getElementById('fwaENC-input').classList.remove('hidden');
    document.getElementById('fwaENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const fwaEpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwaENO-input').addEventListener('input', fwaEpositiveNumberOnly);
document.getElementById('fwaENC-input').addEventListener('input', fwaEpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function fwaEgenerateCode() {
    const noValue = document.getElementById('fwaENO-input').value;
    const ncValue = document.getElementById('fwaENC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('fwawhiteimageContainer');
    const noImageContainer = document.getElementById('fwaEnoimageContainer');
    const ncImageContainer = document.getElementById('fwaEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('fwaplus1');
    const plus2 = document.getElementById('fwaEplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF1A11",
            "10": "EP2PSF1A10",
            "01": "EP2PSF1A01",
            "21": "EP2PSF1A21",
            "23": "EP2PSF1A23",
            "22": "EP2PSF1A22",
            "33": "EP2PSF1A33",
            "32": "EP2PSF1A32",
            "13": "EP2PSF1A13",
            "14": "EP2PSF1A14",
            "15": "EP2PSF1A15",
            "24": "EP2PSF1A24",
            "31": "EP2PSF1A31",
            "41": "EP2PSF1A41",
            "42": "EP2PSF1A42",
            "51": "EP2PSF1A51",
            "00": "EP2PSF1A00",
            "20": "EP2PSF1A20",
            "30": "EP2PSF1A30",
            "40": "EP2PSF1A40",
            "50": "EP2PSF1A50",
            "60": "EP2PSF1A60",
            "02": "EP2PSF1A02",
            "03": "EP2PSF1A03",
            "04": "EP2PSF1A04",
            "05": "EP2PSF1A05",
            "06": "EP2PSF1A06",
            "12": "EP2PSF1A12"    
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fwaENO-input').addEventListener('input', fwaEgenerateCode);
document.getElementById('fwaENC-input').addEventListener('input', fwaEgenerateCode);


// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwasecondnbtnno').addEventListener('click', function () {
    document.getElementById('fwasecondinputno').classList.remove('hidden');
    document.getElementById('fwasecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwasecondnbtnnc').addEventListener('click', function () {
    document.getElementById('fwasecondinputnc').classList.remove('hidden');
    document.getElementById('fwasecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const fwaSpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwasecondinputno').addEventListener('input', fwaSpositiveNumberOnly);
document.getElementById('fwasecondinputnc').addEventListener('input', fwaSpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function fwaSgenerateCode() {
    const noValue = document.getElementById('fwasecondinputno').value;
    const ncValue = document.getElementById('fwasecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('fwablackimageContainer');
    const noImageContainer = document.getElementById('fwanoimageContainer');
    const ncImageContainer = document.getElementById('fwancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('fwaplus1');
    const plus2 = document.getElementById('fwaplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the fwasecond plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF2A11",
            "10": "P2PSF2A10",
            "01": "P2PSF2A01",
            "21": "P2PSF2A21",
            "23": "P2PSF2A23",
            "22": "P2PSF2A22",
            "33": "P2PSF2A33",
            "32": "P2PSF2A32",
            "13": "P2PSF2A13",
            "14": "P2PSF2A14",
            "15": "P2PSF2A15",
            "24": "P2PSF2A24",
            "31": "P2PSF2A31",
            "41": "P2PSF2A41",
            "42": "P2PSF2A42",
            "51": "P2PSF2A51",
            "00": "P2PSF2A00",
            "20": "P2PSF2A20",
            "30": "P2PSF2A30",
            "40": "P2PSF2A40",
            "50": "P2PSF2A50",
            "60": "P2PSF2A60",
            "02": "P2PSF2A02",
            "03": "P2PSF2A03",
            "04": "P2PSF2A04",
            "05": "P2PSF2A05",
            "06": "P2PSF2A06",
            "12": "P2PSF2A12" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fwasecondinputno').addEventListener('input', fwaSgenerateCode);
document.getElementById('fwasecondinputnc').addEventListener('input', fwaSgenerateCode);

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('fwaEsecondnbtnno').addEventListener('click', function () {
    document.getElementById('fwaEsecondinputno').classList.remove('hidden');
    document.getElementById('fwaEsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('fwaEsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('fwaEsecondinputnc').classList.remove('hidden');
    document.getElementById('fwaEsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const fwaESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('fwaEsecondinputno').addEventListener('input', fwaESpositiveNumberOnly);
document.getElementById('fwaEsecondinputnc').addEventListener('input', fwaESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function fwaESgenerateCode() {
    const noValue = document.getElementById('fwaEsecondinputno').value;
    const ncValue = document.getElementById('fwaEsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('fwablackimageContainer');
    const noImageContainer = document.getElementById('fwaEnoimageContainer');
    const ncImageContainer = document.getElementById('fwaEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('fwaplus1');
    const plus2 = document.getElementById('fwaEplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF2A11",
            "10": "EP2PSF2A10",
            "01": "EP2PSF2A01",
            "21": "EP2PSF2A21",
            "23": "EP2PSF2A23",
            "22": "EP2PSF2A22",
            "33": "EP2PSF2A33",
            "32": "EP2PSF2A32",
            "13": "EP2PSF2A13",
            "14": "EP2PSF2A14",
            "15": "EP2PSF2A15",
            "24": "EP2PSF2A24",
            "31": "EP2PSF2A31",
            "41": "EP2PSF2A41",
            "42": "EP2PSF2A42",
            "51": "EP2PSF2A51",
            "00": "EP2PSF2A00",
            "20": "EP2PSF2A20",
            "30": "EP2PSF2A30",
            "40": "EP2PSF2A40",
            "50": "EP2PSF2A50",
            "60": "EP2PSF2A60",
            "02": "EP2PSF2A02",
            "03": "EP2PSF2A03",
            "04": "EP2PSF2A04",
            "05": "EP2PSF2A05",
            "06": "EP2PSF2A06",
            "12": "EP2PSF2A12" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('fwaEsecondinputno').addEventListener('input', fwaESgenerateCode);
document.getElementById('fwaEsecondinputnc').addEventListener('input', fwaESgenerateCode);

// *********************************************************************************************************************************

// third model




// Ensure NO and NC are always visible and displayed together

document.getElementById('projNO-btn').addEventListener('click', function () {

    document.getElementById('projNO-input').classList.remove('hidden');
    document.getElementById('projNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projNC-btn').addEventListener('click', function () {
    document.getElementById('projNC-input').classList.remove('hidden');
    document.getElementById('projNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projNO-input').addEventListener('input', projpositiveNumberOnly);
document.getElementById('projNC-input').addEventListener('input', projpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projgenerateCode() {
    const noValue = document.getElementById('projNO-input').value;
    const ncValue = document.getElementById('projNC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projwhiteimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP111",
            "10": "P2PSP110",
            "01": "P2PSP101",
            "21": "P2PSP121",
            "23": "P2PSP123",
            "22": "P2PSP122",
            "33": "P2PSP133",
            "32": "P2PSP132",
            "13": "P2PSP113",
            "14": "P2PSP114",
            "15": "P2PSP115",
            "24": "P2PSP124",
            "31": "P2PSP131",
            "41": "P2PSP141",
            "42": "P2PSP142",
            "51": "P2PSP151",
            "00": "P2PSP100",
            "20": "P2PSP120",
            "30": "P2PSP130",
            "40": "P2PSP140",
            "50": "P2PSP150",
            "60": "P2PSP160",
            "02": "P2PSP102",
            "03": "P2PSP103",
            "04": "P2PSP104",
            "05": "P2PSP105",
            "06": "P2PSP106",
            "12": "P2PSP112" 
        };

        

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projNO-input').addEventListener('input', projgenerateCode);
document.getElementById('projNC-input').addEventListener('input', projgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projnoimageContainer').classList.add('hidden');
    document.getElementById('projncimageContainer').classList.add('hidden');
    document.getElementById('projwhiteimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

//   ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('projENO-btn').addEventListener('click', function () {
    document.getElementById('projENO-input').classList.remove('hidden');
    document.getElementById('projENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projENC-btn').addEventListener('click', function () {
    document.getElementById('projENC-input').classList.remove('hidden');
    document.getElementById('projENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projEpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projENO-input').addEventListener('input', projEpositiveNumberOnly);
document.getElementById('projENC-input').addEventListener('input', projEpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projEgenerateCode() {
    const noValue = document.getElementById('projENO-input').value;
    const ncValue = document.getElementById('projENC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projwhiteimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSP111",
            "10": "EP2PSP110",
            "01": "EP2PSP101",
            "21": "EP2PSP121",
            "23": "EP2PSP123",
            "22": "EP2PSP122",
            "33": "EP2PSP133",
            "32": "EP2PSP132",
            "13": "EP2PSP113",
            "14": "EP2PSP114",
            "15": "EP2PSP115",
            "24": "EP2PSP124",
            "31": "EP2PSP131",
            "41": "EP2PSP141",
            "42": "EP2PSP142",
            "51": "EP2PSP151",
            "00": "EP2PSP100",
            "20": "EP2PSP120",
            "30": "EP2PSP130",
            "40": "EP2PSP140",
            "50": "EP2PSP150",
            "60": "EP2PSP160",
            "02": "EP2PSP102",
            "03": "EP2PSP103",
            "04": "EP2PSP104",
            "05": "EP2PSP105",
            "06": "EP2PSP106",
            "12": "EP2PSP112" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projENO-input').addEventListener('input', projEgenerateCode);
document.getElementById('projENC-input').addEventListener('input', projEgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projEnoimageContainer').classList.add('hidden');
    document.getElementById('projEncimageContainer').classList.add('hidden');
    document.getElementById('projwhiteimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('projsecondnbtnno').addEventListener('click', function () {
    document.getElementById('projsecondinputno').classList.remove('hidden');
    document.getElementById('projsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('projsecondinputnc').classList.remove('hidden');
    document.getElementById('projsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projSpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projsecondinputno').addEventListener('input', projSpositiveNumberOnly);
document.getElementById('projsecondinputnc').addEventListener('input', projSpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projSgenerateCode() {
    const noValue = document.getElementById('projsecondinputno').value;
    const ncValue = document.getElementById('projsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('projblackimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the projsecond plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP211",
            "10": "P2PSP210",
            "01": "P2PSP201",
            "21": "P2PSP221",
            "23": "P2PSP223",
            "22": "P2PSP222",
            "33": "P2PSP233",
            "32": "P2PSP232",
            "13": "P2PSP213",
            "14": "P2PSP214",
            "15": "P2PSP215",
            "24": "P2PSP224",
            "31": "P2PSP231",
            "41": "P2PSP241",
            "42": "P2PSP242",
            "51": "P2PSP251",
            "00": "P2PSP200",
            "20": "P2PSP220",
            "30": "P2PSP230",
            "40": "P2PSP240",
            "50": "P2PSP250",
            "60": "P2PSP260",
            "02": "P2PSP202",
            "03": "P2PSP203",
            "04": "P2PSP204",
            "05": "P2PSP205",
            "06": "P2PSP206",
            "12": "P2PSP212" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projsecondinputno').addEventListener('input', projSgenerateCode);
document.getElementById('projsecondinputnc').addEventListener('input', projSgenerateCode);

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('projEsecondnbtnno').addEventListener('click', function () {
    document.getElementById('projEsecondinputno').classList.remove('hidden');
    document.getElementById('projEsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projEsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('projEsecondinputnc').classList.remove('hidden');
    document.getElementById('projEsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projEsecondinputno').addEventListener('input', projESpositiveNumberOnly);
document.getElementById('projEsecondinputnc').addEventListener('input', projESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projESgenerateCode() {
    const noValue = document.getElementById('projEsecondinputno').value;
    const ncValue = document.getElementById('projEsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('projblackimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSP211",
            "10": "EP2PSP210",
            "01": "EP2PSP201",
            "21": "EP2PSP221",
            "23": "EP2PSP223",
            "22": "EP2PSP222",
            "33": "EP2PSP233",
            "32": "EP2PSP232",
            "13": "EP2PSP213",
            "14": "EP2PSP214",
            "15": "EP2PSP215",
            "24": "EP2PSP224",
            "31": "EP2PSP231",
            "41": "EP2PSP241",
            "42": "EP2PSP242",
            "51": "EP2PSP251",
            "00": "EP2PSP200",
            "20": "EP2PSP220",
            "30": "EP2PSP230",
            "40": "EP2PSP240",
            "50": "EP2PSP250",
            "60": "EP2PSP260",
            "02": "EP2PSP202",
            "03": "EP2PSP203",
            "04": "EP2PSP204",
            "05": "EP2PSP205",
            "06": "EP2PSP206",
            "12": "EP2PSP212"  
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projEsecondinputno').addEventListener('input', projESgenerateCode);
document.getElementById('projEsecondinputnc').addEventListener('input', projESgenerateCode);

// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('projthirdnbtnno').addEventListener('click', function () {
    document.getElementById('projthirdinputno').classList.remove('hidden');
    document.getElementById('projthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('projthirdinputnc').classList.remove('hidden');
    document.getElementById('projthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projthirdinputno').addEventListener('input', projtpositiveNumberOnly);
document.getElementById('projthirdinputnc').addEventListener('input', projtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function projggenerateCode() {
    const noValue = document.getElementById('projthirdinputno').value;
    const ncValue = document.getElementById('projthirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projgreenimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP311",
            "10": "P2PSP310",
            "01": "P2PSP301",
            "21": "P2PSP321",
            "23": "P2PSP323",
            "22": "P2PSP322",
            "33": "P2PSP333",
            "32": "P2PSP332",
            "13": "P2PSP313",
            "14": "P2PSP314",
            "15": "P2PSP315",
            "24": "P2PSP324",
            "31": "P2PSP331",
            "41": "P2PSP341",
            "42": "P2PSP342",
            "51": "P2PSP351",
            "00": "P2PSP300",
            "20": "P2PSP320",
            "30": "P2PSP330",
            "40": "P2PSP340",
            "50": "P2PSP350",
            "60": "P2PSP360",
            "02": "P2PSP302",
            "03": "P2PSP303",
            "04": "P2PSP304",
            "05": "P2PSP305",
            "06": "P2PSP306",
            "12": "P2PSP312" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projthirdinputno').addEventListener('input', projggenerateCode);
document.getElementById('projthirdinputnc').addEventListener('input', projggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('projnoimageContainer').classList.add('hidden');
    document.getElementById('projncimageContainer').classList.add('hidden');
    document.getElementById('projgreenimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('projEthirdnbtnno').addEventListener('click', function () {
    document.getElementById('projEthirdinputno').classList.remove('hidden');
    document.getElementById('projEthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projEthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('projEthirdinputnc').classList.remove('hidden');
    document.getElementById('projEthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projEtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projEthirdinputno').addEventListener('input', projEtpositiveNumberOnly);
document.getElementById('projEthirdinputnc').addEventListener('input', projEtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function projEggenerateCode() {
    const noValue = document.getElementById('projEthirdinputno').value;
    const ncValue = document.getElementById('projEthirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projgreenimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
           "11": "EP2PSP311",
            "10": "EP2PSP310",
            "01": "EP2PSP301",
            "21": "EP2PSP321",
            "23": "EP2PSP323",
            "22": "EP2PSP322",
            "33": "EP2PSP333",
            "32": "EP2PSP332",
            "13": "EP2PSP313",
            "14": "EP2PSP314",
            "15": "EP2PSP315",
            "24": "EP2PSP324",
            "31": "EP2PSP331",
            "41": "EP2PSP341",
            "42": "EP2PSP342",
            "51": "EP2PSP351",
            "00": "EP2PSP300",
            "20": "EP2PSP320",
            "30": "EP2PSP330",
            "40": "EP2PSP340",
            "50": "EP2PSP350",
            "60": "EP2PSP360",
            "02": "EP2PSP302",
            "03": "EP2PSP303",
            "04": "EP2PSP304",
            "05": "EP2PSP305",
            "06": "EP2PSP306",
            "12": "EP2PSP312" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projEthirdinputno').addEventListener('input', projEggenerateCode);
document.getElementById('projEthirdinputnc').addEventListener('input', projEggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('projEnoimageContainer').classList.add('hidden');
    document.getElementById('projEncimageContainer').classList.add('hidden');
    document.getElementById('projgreenimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('projfourthnbtnno').addEventListener('click', function () {
    document.getElementById('projfourthinputno').classList.remove('hidden');
    document.getElementById('projfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('projfourthinputnc').classList.remove('hidden');
    document.getElementById('projfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projfourthinputno').addEventListener('input', projredgreenpositiveNumberOnly);
document.getElementById('projfourthinputnc').addEventListener('input', projredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projredgreengenerateCode() {
    const noValue = document.getElementById('projfourthinputno').value;
    const ncValue = document.getElementById('projfourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('projredimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP411",
            "10": "P2PSP410",
            "01": "P2PSP401",
            "21": "P2PSP421",
            "23": "P2PSP423",
            "22": "P2PSP422",
            "33": "P2PSP433",
            "32": "P2PSP432",
            "13": "P2PSP413",
            "14": "P2PSP414",
            "15": "P2PSP415",
            "24": "P2PSP424",
            "31": "P2PSP431",
            "41": "P2PSP441",
            "42": "P2PSP442",
            "51": "P2PSP451",
            "00": "P2PSP400",
            "20": "P2PSP420",
            "30": "P2PSP430",
            "40": "P2PSP440",
            "50": "P2PSP450",
            "60": "P2PSP460",
            "02": "P2PSP402",
            "03": "P2PSP403",
            "04": "P2PSP404",
            "05": "P2PSP405",
            "06": "P2PSP406",
            "12": "P2PSP412" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projfourthinputno').addEventListener('input', projredgreengenerateCode);
document.getElementById('projfourthinputnc').addEventListener('input', projredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projnoimageContainer').classList.add('hidden');
    document.getElementById('projncimageContainer').classList.add('hidden');
    document.getElementById('projredimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// economay
// Ensure NO and NC are always visible and displayed together
document.getElementById('projEfourthnbtnno').addEventListener('click', function () {
    document.getElementById('projEfourthinputno').classList.remove('hidden');
    document.getElementById('projEfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projEfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('projEfourthinputnc').classList.remove('hidden');
    document.getElementById('projEfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projEredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projEfourthinputno').addEventListener('input', projEredgreenpositiveNumberOnly);
document.getElementById('projEfourthinputnc').addEventListener('input', projEredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projEredgreengenerateCode() {
    const noValue = document.getElementById('projEfourthinputno').value;
    const ncValue = document.getElementById('projEfourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('projredimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
           "11": "EP2PSP411",
            "10": "EP2PSP410",
            "01": "EP2PSP401",
            "21": "EP2PSP421",
            "23": "EP2PSP423",
            "22": "EP2PSP422",
            "33": "EP2PSP433",
            "32": "EP2PSP432",
            "13": "EP2PSP413",
            "14": "EP2PSP414",
            "15": "EP2PSP415",
            "24": "EP2PSP424",
            "31": "EP2PSP431",
            "41": "EP2PSP441",
            "42": "EP2PSP442",
            "51": "EP2PSP451",
            "00": "EP2PSP400",
            "20": "EP2PSP420",
            "30": "EP2PSP430",
            "40": "EP2PSP440",
            "50": "EP2PSP450",
            "60": "EP2PSP460",
            "02": "EP2PSP402",
            "03": "EP2PSP403",
            "04": "EP2PSP404",
            "05": "EP2PSP405",
            "06": "EP2PSP406",
            "12": "EP2PSP412" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projEfourthinputno').addEventListener('input', projEredgreengenerateCode);
document.getElementById('projEfourthinputnc').addEventListener('input', projEredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projEnoimageContainer').classList.add('hidden');
    document.getElementById('projEncimageContainer').classList.add('hidden');
    document.getElementById('projredimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('projfivenbtnno').addEventListener('click', function () {
    document.getElementById('projfiveinputno').classList.remove('hidden');
    document.getElementById('projfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projfivenbtnnc').addEventListener('click', function () {
    document.getElementById('projfiveinputnc').classList.remove('hidden');
    document.getElementById('projfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projfiveinputno').addEventListener('input', projypositiveNumberOnly);
document.getElementById('projfiveinputnc').addEventListener('input', projypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function projbluegreengenerateCode() {
    const noValue = document.getElementById('projfiveinputno').value;
    const ncValue = document.getElementById('projfiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('projblueimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP611",
            "10": "P2PSP610",
            "01": "P2PSP601",
            "21": "P2PSP621",
            "23": "P2PSP623",
            "22": "P2PSP622",
            "33": "P2PSP633",
            "32": "P2PSP632",
            "13": "P2PSP613",
            "14": "P2PSP614",
            "15": "P2PSP615",
            "24": "P2PSP624",
            "31": "P2PSP631",
            "41": "P2PSP641",
            "42": "P2PSP642",
            "51": "P2PSP651",
            "00": "P2PSP600",
            "20": "P2PSP620",
            "30": "P2PSP630",
            "40": "P2PSP640",
            "50": "P2PSP650",
            "60": "P2PSP660",
            "02": "P2PSP602",
            "03": "P2PSP603",
            "04": "P2PSP604",
            "05": "P2PSP605",
            "06": "P2PSP606", 
            "12": "P2PSP612"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projfiveinputno').addEventListener('input', projbluegreengenerateCode);
document.getElementById('projfiveinputnc').addEventListener('input', projbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('projnoimageContainer').classList.add('hidden');
    document.getElementById('projncimageContainer').classList.add('hidden');
    document.getElementById('projblueimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// economy
// Ensure NO and NC are always visible and displayed together
document.getElementById('projEfivenbtnno').addEventListener('click', function () {
    document.getElementById('projEfiveinputno').classList.remove('hidden');
    document.getElementById('projEfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projEfivenbtnnc').addEventListener('click', function () {
    document.getElementById('projEfiveinputnc').classList.remove('hidden');
    document.getElementById('projEfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projEypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projEfiveinputno').addEventListener('input', projEypositiveNumberOnly);
document.getElementById('projEfiveinputnc').addEventListener('input', projEypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function projEbluegreengenerateCode() {
    const noValue = document.getElementById('projEfiveinputno').value;
    const ncValue = document.getElementById('projEfiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('projblueimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSP611",
            "10": "EP2PSP610",
            "01": "EP2PSP601",
            "21": "EP2PSP621",
            "23": "EP2PSP623",
            "22": "EP2PSP622",
            "33": "EP2PSP633",
            "32": "EP2PSP632",
            "13": "EP2PSP613",
            "14": "EP2PSP614",
            "15": "EP2PSP615",
            "24": "EP2PSP624",
            "31": "EP2PSP631",
            "41": "EP2PSP641",
            "42": "EP2PSP642",
            "51": "EP2PSP651",
            "00": "EP2PSP600",
            "20": "EP2PSP620",
            "30": "EP2PSP630",
            "40": "EP2PSP640",
            "50": "EP2PSP650",
            "60": "EP2PSP660",
            "02": "EP2PSP602",
            "03": "EP2PSP603",
            "04": "EP2PSP604",
            "05": "EP2PSP605",
            "06": "EP2PSP606",
            "12": "EP2PSP612" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projEfiveinputno').addEventListener('input', projEbluegreengenerateCode);
document.getElementById('projEfiveinputnc').addEventListener('input', projEbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('projEnoimageContainer').classList.add('hidden');
    document.getElementById('projEncimageContainer').classList.add('hidden');
    document.getElementById('projblueimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('projsixsnbtnno').addEventListener('click', function () {
    document.getElementById('projsixsinputno').classList.remove('hidden');
    document.getElementById('projsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('projsixsinputnc').classList.remove('hidden');
    document.getElementById('projsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projsixsinputno').addEventListener('input', projyellowPositiveNumberOnly);
document.getElementById('projsixsinputnc').addEventListener('input', projyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projyellowGenerateCode() {
    const noValue = document.getElementById('projsixsinputno').value;
    const ncValue = document.getElementById('projsixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projyellowimageContainer');
    const noImageContainer = document.getElementById('projnoimageContainer');
    const ncImageContainer = document.getElementById('projncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSP811",
            "10": "P2PSP810",
            "01": "P2PSP801",
            "21": "P2PSP821",
            "23": "P2PSP823",
            "22": "P2PSP822",
            "33": "P2PSP833",
            "32": "P2PSP832",
            "13": "P2PSP813",
            "14": "P2PSP814",
            "15": "P2PSP815",
            "24": "P2PSP824",
            "31": "P2PSP831",
            "41": "P2PSP841",
            "42": "P2PSP842",
            "51": "P2PSP851",
            "00": "P2PSP800",
            "20": "P2PSP820",
            "30": "P2PSP830",
            "40": "P2PSP840",
            "50": "P2PSP850",
            "60": "P2PSP860",
            "02": "P2PSP802",
            "03": "P2PSP803",
            "04": "P2PSP804",
            "05": "P2PSP805",
            "06": "P2PSP806",
            "12": "P2PSP812"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projsixsinputno').addEventListener('input', projyellowGenerateCode);
document.getElementById('projsixsinputnc').addEventListener('input', projyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projnoimageContainer').classList.add('hidden');
    document.getElementById('projncimageContainer').classList.add('hidden');
    document.getElementById('projyellowimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('projEsixsnbtnno').addEventListener('click', function () {
    document.getElementById('projEsixsinputno').classList.remove('hidden');
    document.getElementById('projEsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('projEsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('projEsixsinputnc').classList.remove('hidden');
    document.getElementById('projEsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const projEyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('projEsixsinputno').addEventListener('input', projEyellowPositiveNumberOnly);
document.getElementById('projEsixsinputnc').addEventListener('input', projEyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function projEyellowGenerateCode() {
    const noValue = document.getElementById('projEsixsinputno').value;
    const ncValue = document.getElementById('projEsixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('projyellowimageContainer');
    const noImageContainer = document.getElementById('projEnoimageContainer');
    const ncImageContainer = document.getElementById('projEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('projplus1');
    const plus2 = document.getElementById('projEplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSP811",
            "10": "EP2PSP810",
            "01": "EP2PSP801",
            "21": "EP2PSP821",
            "23": "EP2PSP823",
            "22": "EP2PSP822",
            "33": "EP2PSP833",
            "32": "EP2PSP832",
            "13": "EP2PSP813",
            "14": "EP2PSP814",
            "15": "EP2PSP815",
            "24": "EP2PSP824",
            "31": "EP2PSP831",
            "41": "EP2PSP841",
            "42": "EP2PSP842",
            "51": "EP2PSP851",
            "00": "EP2PSP800",
            "20": "EP2PSP820",
            "30": "EP2PSP830",
            "40": "EP2PSP840",
            "50": "EP2PSP850",
            "60": "EP2PSP860",
            "02": "EP2PSP802",
            "03": "EP2PSP803",
            "04": "EP2PSP804",
            "05": "EP2PSP805",
            "06": "EP2PSP806",
            "12": "EP2PSP812" 
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('projEsixsinputno').addEventListener('input', projEyellowGenerateCode);
document.getElementById('projEsixsinputnc').addEventListener('input', projEyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('projEnoimageContainer').classList.add('hidden');
    document.getElementById('projEncimageContainer').classList.add('hidden');
    document.getElementById('projyellowimageContainer').classList.remove('hidden');
    document.getElementById('projplus1').style.display = 'none';
    document.getElementById('projplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});


// *********************************************************************************************************************************
//**************************************************************************************************************************************** */
// fourthmodel


// Ensure NO and NC are always visible and displayed together
document.getElementById('frraNO-btn').addEventListener('click', function () {
    document.getElementById('frraNO-input').classList.remove('hidden');
    document.getElementById('frraNC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraNC-btn').addEventListener('click', function () {
    document.getElementById('frraNC-input').classList.remove('hidden');
    document.getElementById('frraNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frrapositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraNO-input').addEventListener('input', frrapositiveNumberOnly);
document.getElementById('frraNC-input').addEventListener('input', frrapositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frragenerateCode() {
    const noValue = document.getElementById('frraNO-input').value;
    const ncValue = document.getElementById('frraNC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frrawhiteimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF1RR11",
            "12": "P2PSF1RR12",
            "10": "P2PSF1RR10",
            "01": "P2PSF1RR01",
            "21": "P2PSF1RR21",
            "23": "P2PSF1RR23",
            "22": "P2PSF1RR22",
            "33": "P2PSF1RR33",
            "32": "P2PSF1RR32",
            "13": "P2PSF1RR13",
            "14": "P2PSF1RR14",
            "15": "P2PSF1RR15",
            "24": "P2PSF1RR24",
            "31": "P2PSF1RR31",
            "41": "P2PSF1RR41",
            "42": "P2PSF1RR42",
            "51": "P2PSF1RR51",
            "00": "P2PSF1RR00",
            "20": "P2PSF1RR20",
            "30": "P2PSF1RR30",
            "40": "P2PSF1RR40",
            "50": "P2PSF1RR50",
            "60": "P2PSF1RR60",
            "02": "P2PSF1RR02",
            "03": "P2PSF1RR03",
            "04": "P2PSF1RR04",
            "05": "P2PSF1RR05",
            "06": "P2PSF1RR06",
            "12": "P2PSF1RR12"
        };

        

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraNO-input').addEventListener('input', frragenerateCode);
document.getElementById('frraNC-input').addEventListener('input', frragenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frranoimageContainer').classList.add('hidden');
    document.getElementById('frrancimageContainer').classList.add('hidden');
    document.getElementById('frrawhiteimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

//   ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('frraENO-btn').addEventListener('click', function () {
    document.getElementById('frraENO-input').classList.remove('hidden');
    document.getElementById('frraENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraENC-btn').addEventListener('click', function () {
    document.getElementById('frraENC-input').classList.remove('hidden');
    document.getElementById('frraENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraEpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraENO-input').addEventListener('input', frraEpositiveNumberOnly);
document.getElementById('frraENC-input').addEventListener('input', frraEpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraEgenerateCode() {
    const noValue = document.getElementById('frraENO-input').value;
    const ncValue = document.getElementById('frraENC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frrawhiteimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF1RR11",
            "12": "EP2PSF1RR12",
            "10": "EP2PSF1RR10",
            "01": "EP2PSF1RR01",
            "21": "EP2PSF1RR21",
            "23": "EP2PSF1RR23",
            "22": "EP2PSF1RR22",
            "33": "EP2PSF1RR33",
            "32": "EP2PSF1RR32",
            "13": "EP2PSF1RR13",
            "14": "EP2PSF1RR14",
            "15": "EP2PSF1RR15",
            "24": "EP2PSF1RR24",
            "31": "EP2PSF1RR31",
            "41": "EP2PSF1RR41",
            "42": "EP2PSF1RR42",
            "51": "EP2PSF1RR51",
            "00": "EP2PSF1RR00",
            "20": "EP2PSF1RR20",
            "30": "EP2PSF1RR30",
            "40": "EP2PSF1RR40",
            "50": "EP2PSF1RR50",
            "60": "EP2PSF1RR60",
            "02": "EP2PSF1RR02",
            "03": "EP2PSF1RR03",
            "04": "EP2PSF1RR04",
            "05": "EP2PSF1RR05",
            "06": "EP2PSF1RR06",
            "12": "EP2PSF1RR12"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraENO-input').addEventListener('input', frraEgenerateCode);
document.getElementById('frraENC-input').addEventListener('input', frraEgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frraEnoimageContainer').classList.add('hidden');
    document.getElementById('frraEncimageContainer').classList.add('hidden');
    document.getElementById('frrawhiteimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrasecondnbtnno').addEventListener('click', function () {
    document.getElementById('frrasecondinputno').classList.remove('hidden');
    document.getElementById('frrasecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrasecondnbtnnc').addEventListener('click', function () {
    document.getElementById('frrasecondinputnc').classList.remove('hidden');
    document.getElementById('frrasecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraSpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrasecondinputno').addEventListener('input', frraSpositiveNumberOnly);
document.getElementById('frrasecondinputnc').addEventListener('input', frraSpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraSgenerateCode() {
    const noValue = document.getElementById('frrasecondinputno').value;
    const ncValue = document.getElementById('frrasecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('frrablackimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF2RR11",
            "10": "P2PSF2RR10",
            "01": "P2PSF2RR01",
            "21": "P2PSF2RR21",
            "23": "P2PSF2RR23",
            "22": "P2PSF2RR22",
            "12": "P2PSF2RR12",
            "33": "P2PSF2RR33",
            "32": "P2PSF2RR32",
            "13": "P2PSF2RR13",
            "14": "P2PSF2RR14",
            "15": "P2PSF2RR15",
            "24": "P2PSF2RR24",
            "31": "P2PSF2RR31",
            "41": "P2PSF2RR41",
            "42": "P2PSF2RR42",
            "51": "P2PSF2RR51",
            "00": "P2PSF2RR00",
            "20": "P2PSF2RR20",
            "30": "P2PSF2RR30",
            "40": "P2PSF2RR40",
            "50": "P2PSF2RR50",
            "60": "P2PSF2RR60",
            "02": "P2PSF2RR02",
            "03": "P2PSF2RR03",
            "04": "P2PSF2RR04",
            "05": "P2PSF2RR05",
            "06": "P2PSF2RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frrasecondinputno').addEventListener('input', frraSgenerateCode);
document.getElementById('frrasecondinputnc').addEventListener('input', frraSgenerateCode);

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('frraEsecondnbtnno').addEventListener('click', function () {
    document.getElementById('frraEsecondinputno').classList.remove('hidden');
    document.getElementById('frraEsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraEsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('frraEsecondinputnc').classList.remove('hidden');
    document.getElementById('frraEsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraEsecondinputno').addEventListener('input', frraESpositiveNumberOnly);
document.getElementById('frraEsecondinputnc').addEventListener('input', frraESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraESgenerateCode() {
    const noValue = document.getElementById('frraEsecondinputno').value;
    const ncValue = document.getElementById('frraEsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('frrablackimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF2RR11",
            "10": "EP2PSF2RR10",
            "01": "EP2PSF2RR01",
            "21": "EP2PSF2RR21",
            "23": "EP2PSF2RR23",
            "22": "EP2PSF2RR22",
            "12": "EP2PSF2RR12",
            "33": "EP2PSF2RR33",
            "32": "EP2PSF2RR32",
            "13": "EP2PSF2RR13",
            "14": "EP2PSF2RR14",
            "15": "EP2PSF2RR15",
            "24": "EP2PSF2RR24",
            "31": "EP2PSF2RR31",
            "41": "EP2PSF2RR41",
            "42": "EP2PSF2RR42",
            "51": "EP2PSF2RR51",
            "00": "EP2PSF2RR00",
            "20": "EP2PSF2RR20",
            "30": "EP2PSF2RR30",
            "40": "EP2PSF2RR40",
            "50": "EP2PSF2RR50",
            "60": "EP2PSF2RR60",
            "02": "EP2PSF2RR02",
            "03": "EP2PSF2RR03",
            "04": "EP2PSF2RR04",
            "05": "EP2PSF2RR05",
            "06": "EP2PSF2RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraEsecondinputno').addEventListener('input', frraESgenerateCode);
document.getElementById('frraEsecondinputnc').addEventListener('input', frraESgenerateCode);

// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrathirdnbtnno').addEventListener('click', function () {
    document.getElementById('frrathirdinputno').classList.remove('hidden');
    document.getElementById('frrathirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrathirdnbtnnc').addEventListener('click', function () {
    document.getElementById('frrathirdinputnc').classList.remove('hidden');
    document.getElementById('frrathirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frratpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrathirdinputno').addEventListener('input', frratpositiveNumberOnly);
document.getElementById('frrathirdinputnc').addEventListener('input', frratpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function frraggenerateCode() {
    const noValue = document.getElementById('frrathirdinputno').value;
    const ncValue = document.getElementById('frrathirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frragreenimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF3RR11",
            "12": "P2PSF3RR12",
            "10": "P2PSF3RR10",
            "01": "P2PSF3RR01",
            "21": "P2PSF3RR21",
            "23": "P2PSF3RR23",
            "22": "P2PSF3RR22",
            "33": "P2PSF3RR33",
            "32": "P2PSF3RR32",
            "13": "P2PSF3RR13",
            "14": "P2PSF3RR14",
            "15": "P2PSF3RR15",
            "24": "P2PSF3RR24",
            "31": "P2PSF3RR31",
            "41": "P2PSF3RR41",
            "42": "P2PSF3RR42",
            "51": "P2PSF3RR51",
            "00": "P2PSF3RR00",
            "20": "P2PSF3RR20",
            "30": "P2PSF3RR30",
            "40": "P2PSF3RR40",
            "50": "P2PSF3RR50",
            "60": "P2PSF3RR60",
            "02": "P2PSF3RR02",
            "03": "P2PSF3RR03",
            "04": "P2PSF3RR04",
            "05": "P2PSF3RR05",
            "06": "P2PSF3RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frrathirdinputno').addEventListener('input', frraggenerateCode);
document.getElementById('frrathirdinputnc').addEventListener('input', frraggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('frranoimageContainer').classList.add('hidden');
    document.getElementById('frrancimageContainer').classList.add('hidden');
    document.getElementById('frrawhiteimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('frraEthirdnbtnno').addEventListener('click', function () {
    document.getElementById('frraEthirdinputno').classList.remove('hidden');
    document.getElementById('frraEthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraEthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('frraEthirdinputnc').classList.remove('hidden');
    document.getElementById('frraEthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraEtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraEthirdinputno').addEventListener('input', frraEtpositiveNumberOnly);
document.getElementById('frraEthirdinputnc').addEventListener('input', frraEtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function frraEggenerateCode() {
    const noValue = document.getElementById('frraEthirdinputno').value;
    const ncValue = document.getElementById('frraEthirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frragreenimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF3RR11",
            "12": "EP2PSF3RR12",
            "10": "EP2PSF3RR10",
            "01": "EP2PSF3RR01",
            "21": "EP2PSF3RR21",
            "23": "EP2PSF3RR23",
            "22": "EP2PSF3RR22",
            "33": "EP2PSF3RR33",
            "32": "EP2PSF1RR32",
            "13": "EP2PSF1RR13",
            "14": "EP2PSF1RR14",
            "15": "EP2PSF1RR15",
            "24": "EP2PSF1RR24",
            "31": "EP2PSF1RR31",
            "41": "EP2PSF1RR41",
            "42": "EP2PSF1RR42",
            "51": "EP2PSF1RR51",
            "00": "EP2PSF1RR00",
            "20": "EP2PSF1RR20",
            "30": "EP2PSF1RR30",
            "40": "EP2PSF1RR40",
            "50": "EP2PSF1RR50",
            "60": "EP2PSF1RR60",
            "02": "EP2PSF1RR02",
            "03": "EP2PSF1RR03",
            "04": "EP2PSF1RR04",
            "05": "EP2PSF1RR05",
            "06": "EP2PSF1RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraEthirdinputno').addEventListener('input', frraEggenerateCode);
document.getElementById('frraEthirdinputnc').addEventListener('input', frraEggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('frraEnoimageContainer').classList.add('hidden');
    document.getElementById('frraEncimageContainer').classList.add('hidden');
    document.getElementById('frrawhiteimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrafourthnbtnno').addEventListener('click', function () {
    document.getElementById('frrafourthinputno').classList.remove('hidden');
    document.getElementById('frrafourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrafourthnbtnnc').addEventListener('click', function () {
    document.getElementById('frrafourthinputnc').classList.remove('hidden');
    document.getElementById('frrafourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrafourthinputno').addEventListener('input', frraredgreenpositiveNumberOnly);
document.getElementById('frrafourthinputnc').addEventListener('input', frraredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraredgreengenerateCode() {
    const noValue = document.getElementById('frrafourthinputno').value;
    const ncValue = document.getElementById('frrafourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('frraredimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF4RR11",
            "12": "P2PSF4RR12",
            "10": "P2PSF4RR10",
            "01": "P2PSF4RR01",
            "21": "P2PSF4RR21",
            "23": "P2PSF4RR23",
            "22": "P2PSF4RR22",
            "33": "P2PSF4RR33",
            "32": "P2PSF4RR32",
            "13": "P2PSF4RR13",
            "14": "P2PSF4RR14",
            "15": "P2PSF4RR15",
            "24": "P2PSF4RR24",
            "31": "P2PSF4RR31",
            "41": "P2PSF4RR41",
            "42": "P2PSF4RR42",
            "51": "P2PSF4RR51",
            "00": "P2PSF4RR00",
            "20": "P2PSF4RR20",
            "30": "P2PSF4RR30",
            "40": "P2PSF4RR40",
            "50": "P2PSF4RR50",
            "60": "P2PSF4RR60",
            "02": "P2PSF4RR02",
            "03": "P2PSF4RR03",
            "04": "P2PSF4RR04",
            "05": "P2PSF4RR05",
            "06": "P2PSF4RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frrafourthinputno').addEventListener('input', frraredgreengenerateCode);
document.getElementById('frrafourthinputnc').addEventListener('input', frraredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frranoimageContainer').classList.add('hidden');
    document.getElementById('frrancimageContainer').classList.add('hidden');
    document.getElementById('frraredimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// economay
// Ensure NO and NC are always visible and displayed together
document.getElementById('frraEfourthnbtnno').addEventListener('click', function () {
    document.getElementById('frraEfourthinputno').classList.remove('hidden');
    document.getElementById('frraEfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraEfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('frraEfourthinputnc').classList.remove('hidden');
    document.getElementById('frraEfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraEredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraEfourthinputno').addEventListener('input', frraEredgreenpositiveNumberOnly);
document.getElementById('frraEfourthinputnc').addEventListener('input', frraEredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraEredgreengenerateCode() {
    const noValue = document.getElementById('frraEfourthinputno').value;
    const ncValue = document.getElementById('frraEfourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('frraredimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF4RR11",
            "12": "EP2PSF4RR12",
            "10": "EP2PSF4RR10",
            "01": "EP2PSF4RR01",
            "21": "EP2PSF4RR21",
            "23": "EP2PSF4RR23",
            "22": "EP2PSF4RR22",
            "33": "EP2PSF4RR33",
            "32": "EP2PSF4RR32",
            "13": "EP2PSF4RR13",
            "14": "EP2PSF4RR14",
            "15": "EP2PSF4RR15",
            "24": "EP2PSF4RR24",
            "31": "EP2PSF4RR31",
            "41": "EP2PSF4RR41",
            "42": "EP2PSF4RR42",
            "51": "EP2PSF4RR51",
            "00": "EP2PSF4RR00",
            "20": "EP2PSF4RR20",
            "30": "EP2PSF4RR30",
            "40": "EP2PSF4RR40",
            "50": "EP2PSF4RR50",
            "60": "EP2PSF4RR60",
            "02": "EP2PSF4RR02",
            "03": "EP2PSF4RR03",
            "04": "EP2PSF4RR04",
            "05": "EP2PSF4RR05",
            "06": "EP2PSF4RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraEfourthinputno').addEventListener('input', frraEredgreengenerateCode);
document.getElementById('frraEfourthinputnc').addEventListener('input', frraEredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frraEnoimageContainer').classList.add('hidden');
    document.getElementById('frraEncimageContainer').classList.add('hidden');
    document.getElementById('frraredimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrafivenbtnno').addEventListener('click', function () {
    document.getElementById('frrafiveinputno').classList.remove('hidden');
    document.getElementById('frrafiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrafivenbtnnc').addEventListener('click', function () {
    document.getElementById('frrafiveinputnc').classList.remove('hidden');
    document.getElementById('frrafiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrafiveinputno').addEventListener('input', frraypositiveNumberOnly);
document.getElementById('frrafiveinputnc').addEventListener('input', frraypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function frrabluegreengenerateCode() {
    const noValue = document.getElementById('frrafiveinputno').value;
    const ncValue = document.getElementById('frrafiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('frrablueimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF6RR11",
            "10": "P2PSF6RR10",
            "01": "P2PSF6RR01",
            "21": "P2PSF6RR21",
            "23": "P2PSF6RR23",
            "22": "P2PSF6RR22",
            "33": "P2PSF6RR33",
            "12": "P2PSF6RR12",
            "32": "P2PSF6RR32",
            "13": "P2PSF6RR13",
            "14": "P2PSF6RR14",
            "15": "P2PSF6RR15",
            "24": "P2PSF6RR24",
            "31": "P2PSF6RR31",
            "41": "P2PSF6RR41",
            "42": "P2PSF6RR42",
            "51": "P2PSF6RR51",
            "00": "P2PSF6RR00",
            "20": "P2PSF6RR20",
            "30": "P2PSF6RR30",
            "40": "P2PSF6RR40",
            "50": "P2PSF6RR50",
            "60": "P2PSF6RR60",
            "02": "P2PSF6RR02",
            "03": "P2PSF6RR03",
            "04": "P2PSF6RR04",
            "05": "P2PSF6RR05",
            "06": "P2PSF6RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frrafiveinputno').addEventListener('input', frrabluegreengenerateCode);
document.getElementById('frrafiveinputnc').addEventListener('input', frrabluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('frranoimageContainer').classList.add('hidden');
    document.getElementById('frrancimageContainer').classList.add('hidden');
    document.getElementById('frrablueimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// economy
// Ensure NO and NC are always visible and displayed together
document.getElementById('frraEfivenbtnno').addEventListener('click', function () {
    document.getElementById('frraEfiveinputno').classList.remove('hidden');
    document.getElementById('frraEfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraEfivenbtnnc').addEventListener('click', function () {
    document.getElementById('frraEfiveinputnc').classList.remove('hidden');
    document.getElementById('frraEfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraEypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraEfiveinputno').addEventListener('input', frraEypositiveNumberOnly);
document.getElementById('frraEfiveinputnc').addEventListener('input', frraEypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function frraEbluegreengenerateCode() {
    const noValue = document.getElementById('frraEfiveinputno').value;
    const ncValue = document.getElementById('frraEfiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('frrablueimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF6RR11",
            "10": "EP2PSF6RR10",
            "01": "EP2PSF6RR01",
            "21": "EP2PSF6RR21",
            "23": "EP2PSF6RR23",
            "22": "EP2PSF6RR22",
            "33": "EP2PSF6RR33",
            "12": "EP2PSF6RR12",
            "32": "EP2PSF6RR32",
            "13": "EP2PSF6RR13",
            "14": "EP2PSF6RR14",
            "15": "EP2PSF6RR15",
            "24": "EP2PSF6RR24",
            "31": "EP2PSF6RR31",
            "41": "EP2PSF6RR41",
            "42": "EP2PSF6RR42",
            "51": "EP2PSF6RR51",
            "00": "EP2PSF6RR00",
            "20": "EP2PSF6RR20",
            "30": "EP2PSF6RR30",
            "40": "EP2PSF6RR40",
            "50": "EP2PSF6RR50",
            "60": "EP2PSF6RR60",
            "02": "EP2PSF6RR02",
            "03": "EP2PSF6RR03",
            "04": "EP2PSF6RR04",
            "05": "EP2PSF6RR05",
            "06": "EP2PSF6RR06"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraEfiveinputno').addEventListener('input', frraEbluegreengenerateCode);
document.getElementById('frraEfiveinputnc').addEventListener('input', frraEbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('EnoimageContainer').classList.add('hidden');
    document.getElementById('EncimageContainer').classList.add('hidden');
    document.getElementById('blueimageContainer').classList.remove('hidden');
    document.getElementById('plus1').style.display = 'none';
    document.getElementById('plus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('frrasixsnbtnno').addEventListener('click', function () {
    document.getElementById('frrasixsinputno').classList.remove('hidden');
    document.getElementById('frrasixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frrasixsnbtnnc').addEventListener('click', function () {
    document.getElementById('frrasixsinputnc').classList.remove('hidden');
    document.getElementById('frrasixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frrayellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frrasixsinputno').addEventListener('input',frrayellowPositiveNumberOnly);
document.getElementById('frrasixsinputnc').addEventListener('input', frrayellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frrayellowGenerateCode() {
    const noValue = document.getElementById('frrasixsinputno').value;
    const ncValue = document.getElementById('frrasixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frrayellowimageContainer');
    const noImageContainer = document.getElementById('frranoimageContainer');
    const ncImageContainer = document.getElementById('frrancimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSF8RR11",
            "10": "P2PSF8RR10",
            "01": "P2PSF8RR01",
            "21": "P2PSF8RR21",
            "23": "P2PSF8RR23",
            "22": "P2PSF8RR22",
            "33": "P2PSF8RR33",
            "33": "P2PSF8RR33",
            "33": "P2PSF8RR33",
            "32": "P2PSF8RR32",
            "13": "P2PSF8RR13",
            "14": "P2PSF8RR14",
            "15": "P2PSF8RR15",
            "24": "P2PSF8RR24",
            "31": "P2PSF8RR31",
            "41": "P2PSF8RR41",
            "42": "P2PSF8RR42",
            "51": "P2PSF8RR51",
            "00": "P2PSF8RR00",
            "20": "P2PSF8RR20",
            "30": "P2PSF8RR30",
            "40": "P2PSF8RR40",
            "50": "P2PSF8RR50",
            "60": "P2PSF8RR60",
            "02": "P2PSF8RR02",
            "03": "P2PSF8RR03",
            "04": "P2PSF8RR04",
            "05": "P2PSF8RR05",
            "06": "P2PSF8RR06",
            "12": "P2PSF8RR12"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frrasixsinputno').addEventListener('input', frrayellowGenerateCode);
document.getElementById('frrasixsinputnc').addEventListener('input', frrayellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frranoimageContainer').classList.add('hidden');
    document.getElementById('frrancimageContainer').classList.add('hidden');
    document.getElementById('frrayellowimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('frraEsixsnbtnno').addEventListener('click', function () {
    document.getElementById('frraEsixsinputno').classList.remove('hidden');
    document.getElementById('frraEsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('frraEsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('frraEsixsinputnc').classList.remove('hidden');
    document.getElementById('frraEsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const frraEyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('frraEsixsinputno').addEventListener('input', frraEyellowPositiveNumberOnly);
document.getElementById('frraEsixsinputnc').addEventListener('input', frraEyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function frraEyellowGenerateCode() {
    const noValue = document.getElementById('frraEsixsinputno').value;
    const ncValue = document.getElementById('frraEsixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('frrayellowimageContainer');
    const noImageContainer = document.getElementById('frraEnoimageContainer');
    const ncImageContainer = document.getElementById('frraEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('frraplus1');
    const plus2 = document.getElementById('frraEplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSF8RR11",
            "10": "EP2PSF8RR10",
            "01": "EP2PSF8RR01",
            "21": "EP2PSF8RR21",
            "23": "EP2PSF8RR23",
            "22": "EP2PSF8RR22",
            "33": "EP2PSF8RR33",
            "33": "EP2PSF8RR33",
            "33": "EP2PSF8RR33",
            "32": "EP2PSF8RR32",
            "13": "EP2PSF8RR13",
            "14": "EP2PSF8RR14",
            "15": "EP2PSF8RR15",
            "24": "EP2PSF8RR24",
            "31": "EP2PSF8RR31",
            "41": "EP2PSF8RR41",
            "42": "EP2PSF8RR42",
            "51": "EP2PSF8RR51",
            "00": "EP2PSF8RR00",
            "20": "EP2PSF8RR20",
            "30": "EP2PSF8RR30",
            "40": "EP2PSF8RR40",
            "50": "EP2PSF8RR50",
            "60": "EP2PSF8RR60",
            "02": "EP2PSF8RR02",
            "03": "EP2PSF8RR03",
            "04": "EP2PSF8RR04",
            "05": "EP2PSF8RR05",
            "06": "EP2PSF8RR06",
            "12": "EP2PSF8RR12"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('frraEsixsinputno').addEventListener('input', frraEyellowGenerateCode);
document.getElementById('frraEsixsinputnc').addEventListener('input', frraEyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('frraEnoimageContainer').classList.add('hidden');
    document.getElementById('frraEncimageContainer').classList.add('hidden');
    document.getElementById('frrayellowimageContainer').classList.remove('hidden');
    document.getElementById('frraplus1').style.display = 'none';
    document.getElementById('frraplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// *********************************************************************************************************************************
//**************************************************************************************************************************************** */
// fithmodel

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootNO-btn').addEventListener('click', function () {
    document.getElementById('bootNO-input').classList.remove('hidden');
    document.getElementById('NC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootNC-btn').addEventListener('click', function () {
    document.getElementById('bootNC-input').classList.remove('hidden');
    document.getElementById('bootNO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootNO-input').addEventListener('input', bootpositiveNumberOnly);
document.getElementById('bootNC-input').addEventListener('input', bootpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootgenerateCode() {
    const noValue = document.getElementById('bootNO-input').value;
    const ncValue = document.getElementById('bootNC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootwhiteimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB1BT711",
            "10": "P2PSB1BT710",
            "01": "P2PSB1BT701",
            "21": "P2PSB1BT721",
            "23": "P2PSB1BT723",
            "22": "P2PSB1BT722",
            "33": "P2PSB1BT733",
            "32": "P2PSB1BT732",
            "13": "P2PSB1BT713",
            "14": "P2PSB1BT714",
            "15": "P2PSB1BT715",
            "24": "P2PSB1BT724",
            "31": "P2PSB1BT731",
            "41": "P2PSB1BT741",
            "42": "P2PSB1BT742",
            "51": "P2PSB1BT751",
            "00": "P2PSB1BT700",
            "20": "P2PSB1BT720",
            "30": "P2PSB1BT730",
            "40": "P2PSB1BT740",
            "50": "P2PSB1BT750",
            "60": "P2PSB1BT760",
            "02": "P2PSB1BT702",
            "03": "P2PSB1BT703",
            "04": "P2PSB1BT704",
            "05": "P2PSB1BT705",
            "06": "P2PSB1BT706",
            "12": "P2PSB1BT712"
        };

        

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootNO-input').addEventListener('input',bootgenerateCode);
document.getElementById('bootNC-input').addEventListener('input', bootgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootnoimageContainer').classList.add('hidden');
    document.getElementById('bootncimageContainer').classList.add('hidden');
    document.getElementById('bootwhiteimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

//   ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('bootENO-btn').addEventListener('click', function () {
    document.getElementById('bootENO-input').classList.remove('hidden');
    document.getElementById('bootENC-input').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootENC-btn').addEventListener('click', function () {
    document.getElementById('bootENC-input').classList.remove('hidden');
    document.getElementById('bootENO-input').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootEpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootENO-input').addEventListener('input', bootEpositiveNumberOnly);
document.getElementById('bootENC-input').addEventListener('input', bootEpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootEgenerateCode() {
    const noValue = document.getElementById('bootENO-input').value;
    const ncValue = document.getElementById('bootENC-input').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootwhiteimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';


    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB1BT711",
            "10": "EP2PSB1BT710",
            "01": "EP2PSB1BT701",
            "21": "EP2PSB1BT721",
            "23": "EP2PSB1BT723",
            "22": "EP2PSB1BT722",
            "33": "EP2PSB1BT733",
            "32": "EP2PSB1BT732",
            "13": "EP2PSB1BT713",
            "14": "EP2PSB1BT714",
            "15": "EP2PSB1BT715",
            "24": "EP2PSB1BT724",
            "31": "EP2PSB1BT731",
            "41": "EP2PSB1BT741",
            "42": "EP2PSB1BT742",
            "51": "EP2PSB1BT751",
            "00": "EP2PSB1BT700",
            "20": "EP2PSB1BT720",
            "30": "EP2PSB1BT730",
            "40": "EP2PSB1BT740",
            "50": "EP2PSB1BT750",
            "60": "EP2PSB1BT760",
            "02": "EP2PSB1BT702",
            "03": "EP2PSB1BT703",
            "04": "EP2PSB1BT704",
            "05": "EP2PSB1BT705",
            "06": "EP2PSB1BT706",
            "12": "EP2PSB1BT712"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `   ORDERING CODE:${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootENO-input').addEventListener('input', bootEgenerateCode);
document.getElementById('bootENC-input').addEventListener('input', bootEgenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootEnoimageContainer').classList.add('hidden');
    document.getElementById('bootEncimageContainer').classList.add('hidden');
    document.getElementById('bootwhiteimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// for second

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootsecondnbtnno').addEventListener('click', function () {
    document.getElementById('bootsecondinputno').classList.remove('hidden');
    document.getElementById('bootsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('bootsecondinputnc').classList.remove('hidden');
    document.getElementById('bootsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootSpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootsecondinputno').addEventListener('input', bootSpositiveNumberOnly);
document.getElementById('bootsecondinputnc').addEventListener('input', bootSpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootSgenerateCode() {
    const noValue = document.getElementById('bootsecondinputno').value;
    const ncValue = document.getElementById('bootsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('bootblackimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the bootsecond plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB2BT711",
            "10": "P2PSB2BT710",
            "01": "P2PSB2BT701",
            "21": "P2PSB2BT721",
            "23": "P2PSB2BT723",
            "22": "P2PSB2BT722",
            "12": "P2PSB2BT712",
            "32": "P2PSB2BT732",
            "13": "P2PSB2BT713",
            "14": "P2PSB2BT714",
            "15": "P2PSB2BT715",
            "24": "P2PSB2BT724",
            "31": "P2PSB2BT731",
            "41": "P2PSB2BT741",
            "42": "P2PSB2BT742",
            "51": "P2PSB2BT751",
            "00": "P2PSB2BT700",
            "20": "P2PSB2BT720",
            "30": "P2PSB2BT730",
            "40": "P2PSB2BT740",
            "50": "P2PSB2BT750",
            "60": "P2PSB2BT760",
            "02": "P2PSB2BT702",
            "03": "P2PSB2BT703",
            "04": "P2PSB2BT704",
            "05": "P2PSB2BT705",
            "06": "P2PSB2BT706",           
            "33": "P2PSB2BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootsecondinputno').addEventListener('input', bootSgenerateCode);
document.getElementById('bootsecondinputnc').addEventListener('input', bootSgenerateCode);

// economy

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootEsecondnbtnno').addEventListener('click', function () {
    document.getElementById('bootEsecondinputno').classList.remove('hidden');
    document.getElementById('bootEsecondinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootEsecondnbtnnc').addEventListener('click', function () {
    document.getElementById('bootEsecondinputnc').classList.remove('hidden');
    document.getElementById('bootEsecondinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootESpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootEsecondinputno').addEventListener('input', bootESpositiveNumberOnly);
document.getElementById('bootEsecondinputnc').addEventListener('input', bootESpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootESgenerateCode() {
    const noValue = document.getElementById('bootEsecondinputno').value;
    const ncValue = document.getElementById('bootEsecondinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blackImageContainer = document.getElementById('bootblackimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure black image is always visible
    blackImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB2BT711",
            "10": "EP2PSB2BT710",
            "01": "EP2PSB2BT701",
            "21": "EP2PSB2BT721",
            "23": "EP2PSB2BT723",
            "22": "EP2PSB2BT722",
            "12": "EP2PSB2BT712",
            "32": "EP2PSB2BT732",
            "13": "EP2PSB2BT713",
            "14": "EP2PSB2BT714",
            "15": "EP2PSB2BT715",
            "24": "EP2PSB2BT724",
            "31": "EP2PSB2BT731",
            "41": "EP2PSB2BT741",
            "42": "EP2PSB2BT742",
            "51": "EP2PSB2BT751",
            "00": "EP2PSB2BT700",
            "20": "EP2PSB2BT720",
            "30": "EP2PSB2BT730",
            "40": "EP2PSB2BT740",
            "50": "EP2PSB2BT750",
            "60": "EP2PSB2BT760",
            "02": "EP2PSB2BT702",
            "03": "EP2PSB2BT703",
            "04": "EP2PSB2BT704",
            "05": "EP2PSB2BT705",
            "06": "EP2PSB2BT706",           
            "33": "EP2PSB2BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootEsecondinputno').addEventListener('input', bootESgenerateCode);
document.getElementById('bootEsecondinputnc').addEventListener('input', bootESgenerateCode);

// third 

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootthirdnbtnno').addEventListener('click', function () {
    document.getElementById('bootthirdinputno').classList.remove('hidden');
    document.getElementById('bootthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('bootthirdinputnc').classList.remove('hidden');
    document.getElementById('bootthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const boottpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootthirdinputno').addEventListener('input', boottpositiveNumberOnly);
document.getElementById('bootthirdinputnc').addEventListener('input', boottpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bootggenerateCode() {
    const noValue = document.getElementById('bootthirdinputno').value;
    const ncValue = document.getElementById('bootthirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootgreenimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB3BT711",
            "10": "P2PSB3BT710",
            "01": "P2PSB3BT701",
            "21": "P2PSB3BT721",
            "23": "P2PSB3BT723",
            "22": "P2PSB3BT722",
            "33": "P2PSB3BT733",
            "12": "P2PSBBT712",
            "32": "P2PSB3BT732",
            "13": "P2PSB3BT713",
            "14": "P2PSB3BT714",
            "15": "P2PSB3BT715",
            "24": "P2PSB3BT724",
            "31": "P2PSB3BT731",
            "41": "P2PSB3BT741",
            "42": "P2PSB3BT742",
            "51": "P2PSB3BT751",
            "00": "P2PSB3BT700",
            "20": "P2PSB3BT720",
            "30": "P2PSB3BT730",
            "40": "P2PSB3BT740",
            "50": "P2PSB3BT750",
            "60": "P2PSB3BT760",
            "02": "P2PSB3BT702",
            "03": "P2PSB3BT703",
            "04": "P2PSB3BT704",
            "05": "P2PSB3BT705",
            "06": "P2PSB3BT706"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootthirdinputno').addEventListener('input', bootggenerateCode);
document.getElementById('bootthirdinputnc').addEventListener('input', bootggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('bootnoimageContainer').classList.add('hidden');
    document.getElementById('bootncimageContainer').classList.add('hidden');
    document.getElementById('bootwhiteimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('bootEthirdnbtnno').addEventListener('click', function () {
    document.getElementById('bootEthirdinputno').classList.remove('hidden');
    document.getElementById('bootEthirdinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootEthirdnbtnnc').addEventListener('click', function () {
    document.getElementById('bootEthirdinputnc').classList.remove('hidden');
    document.getElementById('bootEthirdinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootEtpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootEthirdinputno').addEventListener('input', bootEtpositiveNumberOnly);
document.getElementById('bootEthirdinputnc').addEventListener('input', bootEtpositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bootEggenerateCode() {
    const noValue = document.getElementById('bootEthirdinputno').value;
    const ncValue = document.getElementById('bootEthirdinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootgreenimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure the white image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB3BT711",
            "10": "EP2PSB3BT710",
            "01": "EP2PSB3BT701",
            "21": "EP2PSB3BT721",
            "23": "EP2PSB3BT723",
            "22": "EP2PSB3BT722",
            "33": "EP2PSB3BT733",
            "12": "EP2PSBBT712",
            "32": "EP2PSB3BT732",
            "13": "EP2PSB3BT713",
            "14": "EP2PSB3BT714",
            "15": "EP2PSB3BT715",
            "24": "EP2PSB3BT724",
            "31": "EP2PSB3BT731",
            "41": "EP2PSB3BT741",
            "42": "EP2PSB3BT742",
            "51": "EP2PSB3BT751",
            "00": "EP2PSB3BT700",
            "20": "EP2PSB3BT720",
            "30": "EP2PSB3BT730",
            "40": "EP2PSB3BT740",
            "50": "EP2PSB3BT750",
            "60": "EP2PSB3BT760",
            "02": "EP2PSB3BT702",
            "03": "EP2PSB3BT703",
            "04": "EP2PSB3BT704",
            "05": "EP2PSB3BT705",
            "06": "EP2PSB3BT706"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootEthirdinputno').addEventListener('input', bootEggenerateCode);
document.getElementById('bootEthirdinputnc').addEventListener('input', bootEggenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Reset all forms with the class 'flushform'
    document.querySelectorAll('.flushform').forEach(form => form.reset());

    // Reset images and hide plus symbols
    document.getElementById('bootEnoimageContainer').classList.add('hidden');
    document.getElementById('bootEncimageContainer').classList.add('hidden');
    document.getElementById('bootwhiteimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// fourth

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootfourthnbtnno').addEventListener('click', function () {
    document.getElementById('bootfourthinputno').classList.remove('hidden');
    document.getElementById('bootfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('bootfourthinputnc').classList.remove('hidden');
    document.getElementById('bootfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootfourthinputno').addEventListener('input', bootredgreenpositiveNumberOnly);
document.getElementById('bootfourthinputnc').addEventListener('input', bootredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootredgreengenerateCode() {
    const noValue = document.getElementById('bootfourthinputno').value;
    const ncValue = document.getElementById('bootfourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('bootredimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB4BT711",
            "10": "P2PSB4BT710",
            "01": "P2PSB4BT701",
            "21": "P2PSB4BT721",
            "23": "P2PSB4BT723",
            "22": "P2PSB4BT722",
            "12": "P2PSB4BT712",
            "33": "P2PSB4BT733",
            "32": "P2PSB4BT732",
            "13": "P2PSB4BT713",
            "14": "P2PSB4BT714",
            "15": "P2PSB4BT715",
            "24": "P2PSB4BT724",
            "31": "P2PSB4BT731",
            "41": "P2PSB4BT741",
            "42": "P2PSB4BT742",
            "51": "P2PSB4BT751",
            "00": "P2PSB4BT700",
            "20": "P2PSB4BT720",
            "30": "P2PSB4BT730",
            "40": "P2PSB4BT740",
            "50": "P2PSB4BT750",
            "60": "P2PSB4BT760",
            "02": "P2PSB4BT702",
            "03": "P2PSB4BT703",
            "04": "P2PSB4BT704",
            "05": "P2PSB4BT705",
            "06": "P2PSB4BT706",           
            "33": "P2PSB4BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootfourthinputno').addEventListener('input', bootredgreengenerateCode);
document.getElementById('bootfourthinputnc').addEventListener('input', bootredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootnoimageContainer').classList.add('hidden');
    document.getElementById('bootncimageContainer').classList.add('hidden');
    document.getElementById('bootredimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});



// economay
// Ensure NO and NC are always visible and displayed together
document.getElementById('bootEfourthnbtnno').addEventListener('click', function () {
    document.getElementById('bootEfourthinputno').classList.remove('hidden');
    document.getElementById('bootEfourthinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootEfourthnbtnnc').addEventListener('click', function () {
    document.getElementById('bootEfourthinputnc').classList.remove('hidden');
    document.getElementById('bootEfourthinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootEredgreenpositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootEfourthinputno').addEventListener('input', bootEredgreenpositiveNumberOnly);
document.getElementById('bootEfourthinputnc').addEventListener('input', bootEredgreenpositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootEredgreengenerateCode() {
    const noValue = document.getElementById('bootEfourthinputno').value;
    const ncValue = document.getElementById('bootEfourthinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const redImageContainer = document.getElementById('bootredimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure red image is always visible
    redImageContainer.classList.remove('hidden');
    plus1.style.display = 'none'; // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB4BT711",
            "10": "EP2PSB4BT710",
            "01": "EP2PSB4BT701",
            "21": "EP2PSB4BT721",
            "23": "EP2PSB4BT723",
            "22": "EP2PSB4BT722",
            "12": "EP2PSB4BT712",
            "33": "EP2PSB4BT733",
            "32": "EP2PSB4BT732",
            "13": "EP2PSB4BT713",
            "14": "EP2PSB4BT714",
            "15": "EP2PSB4BT715",
            "24": "EP2PSB4BT724",
            "31": "EP2PSB4BT731",
            "41": "EP2PSB4BT741",
            "42": "EP2PSB4BT742",
            "51": "EP2PSB4BT751",
            "00": "EP2PSB4BT700",
            "20": "EP2PSB4BT720",
            "30": "EP2PSB4BT730",
            "40": "EP2PSB4BT740",
            "50": "EP2PSB4BT750",
            "60": "EP2PSB4BT760",
            "02": "EP2PSB4BT702",
            "03": "EP2PSB4BT703",
            "04": "EP2PSB4BT704",
            "05": "EP2PSB4BT705",
            "06": "EP2PSB4BT706",           
            "33": "EP2PSB4BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootEfourthinputno').addEventListener('input', bootEredgreengenerateCode);
document.getElementById('bootEfourthinputnc').addEventListener('input', bootEredgreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootEnoimageContainer').classList.add('hidden');
    document.getElementById('bootEncimageContainer').classList.add('hidden');
    document.getElementById('bootredimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});






// five

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootfivenbtnno').addEventListener('click', function () {
    document.getElementById('bootfiveinputno').classList.remove('hidden');
    document.getElementById('bootfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootfivenbtnnc').addEventListener('click', function () {
    document.getElementById('bootfiveinputnc').classList.remove('hidden');
    document.getElementById('bootfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootfiveinputno').addEventListener('input', bootypositiveNumberOnly);
document.getElementById('bootfiveinputnc').addEventListener('input', bootypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bootbluegreengenerateCode() {
    const noValue = document.getElementById('bootfiveinputno').value;
    const ncValue = document.getElementById('bootfiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('bootblueimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB6BT711",
            "10": "P2PSB6BT710",
            "01": "P2PSB6BT701",
            "21": "P2PSB6BT721",
            "12": "P2PSB6BT712",
            "23": "P2PSB6BT723",
            "22": "P2PSB6BT722",
            "33": "P2PSB6BT733",
            "32": "P2PSB6BT732",
            "13": "P2PSB6BT713",
            "14": "P2PSB6BT714",
            "15": "P2PSB6BT715",
            "24": "P2PSB6BT724",
            "31": "P2PSB6BT731",
            "41": "P2PSB6BT741",
            "42": "P2PSB6BT742",
            "51": "P2PSB6BT751",
            "00": "P2PSB6BT700",
            "20": "P2PSB6BT720",
            "30": "P2PSB6BT730",
            "40": "P2PSB6BT740",
            "50": "P2PSB6BT750",
            "60": "P2PSB6BT760",
            "02": "P2PSB6BT702",
            "03": "P2PSB6BT703",
            "04": "P2PSB6BT704",
            "05": "P2PSB6BT705",
            "06": "P2PSB6BT706",
            "33": "P2PSB6BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootfiveinputno').addEventListener('input', bootbluegreengenerateCode);
document.getElementById('bootfiveinputnc').addEventListener('input', bootbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('bootnoimageContainer').classList.add('hidden');
    document.getElementById('bootncimageContainer').classList.add('hidden');
    document.getElementById('bootblueimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// economy
// Ensure NO and NC are always visible and displayed together
document.getElementById('bootEfivenbtnno').addEventListener('click', function () {
    document.getElementById('bootEfiveinputno').classList.remove('hidden');
    document.getElementById('bootEfiveinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootEfivenbtnnc').addEventListener('click', function () {
    document.getElementById('bootEfiveinputnc').classList.remove('hidden');
    document.getElementById('bootEfiveinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootEypositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootEfiveinputno').addEventListener('input', bootEypositiveNumberOnly);
document.getElementById('bootEfiveinputnc').addEventListener('input', bootEypositiveNumberOnly);

// Function to generate the code, show images, and add plus symbols dynamically
function bootEbluegreengenerateCode() {
    const noValue = document.getElementById('bootEfiveinputno').value;
    const ncValue = document.getElementById('bootEfiveinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const blueImageContainer = document.getElementById('bootblueimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure blue image is always visible
    blueImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB6BT711",
            "10": "EP2PSB6BT710",
            "01": "EP2PSB6BT701",
            "21": "EP2PSB6BT721",
            "12": "EP2PSB6BT712",
            "23": "EP2PSB6BT723",
            "22": "EP2PSB6BT722",
            "33": "EP2PSB6BT733",
            "32": "EP2PSB6BT732",
            "13": "EP2PSB6BT713",
            "14": "EP2PSB6BT714",
            "15": "EP2PSB6BT715",
            "24": "EP2PSB6BT724",
            "31": "EP2PSB6BT731",
            "41": "EP2PSB6BT741",
            "42": "EP2PSB6BT742",
            "51": "EP2PSB6BT751",
            "00": "EP2PSB6BT700",
            "20": "EP2PSB6BT720",
            "30": "EP2PSB6BT730",
            "40": "EP2PSB6BT740",
            "50": "EP2PSB6BT750",
            "60": "EP2PSB6BT760",
            "02": "EP2PSB6BT702",
            "03": "EP2PSB6BT703",
            "04": "EP2PSB6BT704",
            "05": "EP2PSB6BT705",
            "06": "EP2PSB6BT706",
            "33": "EP2PSB6BT733"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = `Description:`;
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootEfiveinputno').addEventListener('input', bootEbluegreengenerateCode);
document.getElementById('bootEfiveinputnc').addEventListener('input', bootEbluegreengenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        form.reset(); // Reset each form individually
    });

    // Reset images and hide plus symbols
    document.getElementById('bootEnoimageContainer').classList.add('hidden');
    document.getElementById('bootEncimageContainer').classList.add('hidden');
    document.getElementById('bootblueimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// sixs

// Ensure NO and NC are always visible and displayed together
document.getElementById('bootsixsnbtnno').addEventListener('click', function () {
    document.getElementById('bootsixsinputno').classList.remove('hidden');
    document.getElementById('bootsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('bootsixsinputnc').classList.remove('hidden');
    document.getElementById('bootsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootsixsinputno').addEventListener('input', bootyellowPositiveNumberOnly);
document.getElementById('bootsixsinputnc').addEventListener('input', bootyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootyellowGenerateCode() {
    const noValue = document.getElementById('bootsixsinputno').value;
    const ncValue = document.getElementById('bootsixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootyellowimageContainer');
    const noImageContainer = document.getElementById('bootnoimageContainer');
    const ncImageContainer = document.getElementById('bootncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `images/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `images/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "P2PSB8BT711",
            "10": "P2PSB8BT710",
            "01": "P2PSB8BT701",
            "21": "P2PSB8BT721",
            "23": "P2PSB8BT723",
            "22": "P2PSB8BT722",
            "33": "P2PSB8BT733",
            "32": "P2PSB6BT732",
            "13": "P2PSB6BT713",
            "14": "P2PSB6BT714",
            "15": "P2PSB6BT715",
            "24": "P2PSB6BT724",
            "31": "P2PSB6BT731",
            "41": "P2PSB6BT741",
            "42": "P2PSB6BT742",
            "51": "P2PSB6BT751",
            "00": "P2PSB6BT700",
            "20": "P2PSB6BT720",
            "30": "P2PSB6BT730",
            "40": "P2PSB6BT740",
            "50": "P2PSB6BT750",
            "60": "P2PSB6BT760",
            "02": "P2PSB6BT702",
            "03": "P2PSB6BT703",
            "04": "P2PSB6BT704",
            "05": "P2PSB6BT705",
            "06": "P2PSB6BT706",
            "33": "P2PSB6BT733",
            "12": "P2PSB6BT712"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootsixsinputno').addEventListener('input', bootyellowGenerateCode);
document.getElementById('bootsixsinputnc').addEventListener('input', bootyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootnoimageContainer').classList.add('hidden');
    document.getElementById('bootncimageContainer').classList.add('hidden');
    document.getElementById('bootyellowimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});

// ECONOMY
// Ensure NO and NC are always visible and displayed together
document.getElementById('bootEsixsnbtnno').addEventListener('click', function () {
    document.getElementById('bootEsixsinputno').classList.remove('hidden');
    document.getElementById('bootEsixsinputnc').classList.remove('hidden'); // Always show NC with NO
});

document.getElementById('bootEsixsnbtnnc').addEventListener('click', function () {
    document.getElementById('bootEsixsinputnc').classList.remove('hidden');
    document.getElementById('bootEsixsinputno').classList.remove('hidden'); // Always show NO with NC
});

// Restrict NO and NC inputs to positive numbers only
const bootEyellowPositiveNumberOnly = (event) => {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

// Add event listeners to enforce positive number restriction
document.getElementById('bootEsixsinputno').addEventListener('input', bootEyellowPositiveNumberOnly);
document.getElementById('bootEsixsinputnc').addEventListener('input', bootEyellowPositiveNumberOnly);

// Function to generate the code, show the images, and add plus symbols dynamically
function bootEyellowGenerateCode() {
    const noValue = document.getElementById('bootEsixsinputno').value;
    const ncValue = document.getElementById('bootEsixsinputnc').value;

    const resultContainer = document.getElementById('result');
    const descriptionContainer = document.getElementById('description');
    const generatedCodeElement = document.getElementById('generated-code');

    // Image containers
    const whiteImageContainer = document.getElementById('bootyellowimageContainer');
    const noImageContainer = document.getElementById('bootEnoimageContainer');
    const ncImageContainer = document.getElementById('bootEncimageContainer');

    // Plus symbols
    const plus1 = document.getElementById('bootplus1');
    const plus2 = document.getElementById('bootEplus2');

    // Ensure the yellow image is always visible
    whiteImageContainer.classList.remove('hidden');
    plus1.style.display = 'none';  // Hide symbols initially
    plus2.style.display = 'none';

    const noImageName = noImageContainer.querySelector('.image-name');
    const ncImageName = ncImageContainer.querySelector('.image-name');

    // Logic for NO and NC images
    if (noValue) {
        noImageContainer.querySelector('img').src = `Eimages/no-${noValue}.png`;
        noImageName.textContent = `S1*${noValue}`;
        noImageContainer.classList.remove('hidden');
        plus1.style.display = 'block'; // Show the first plus symbol
    } else {
        noImageContainer.classList.add('hidden');
    }

    if (ncValue) {
        ncImageContainer.querySelector('img').src = `Eimages/nc-${ncValue}.png`;
        ncImageName.textContent = `S2*${ncValue}`;
        ncImageContainer.classList.remove('hidden');
        plus2.style.display = 'block'; // Show the second plus symbol
    } else {
        ncImageContainer.classList.add('hidden');
    }

    // Code generation logic
    if (noValue && ncValue) {
        const codes = {
            "11": "EP2PSB8BT711",
            "10": "EP2PSB8BT710",
            "01": "EP2PSB8BT701",
            "21": "EP2PSB8BT721",
            "23": "EP2PSB8BT723",
            "22": "EP2PSB8BT722",
            "33": "EP2PSB8BT733",
            "32": "EP2PSB6BT732",
            "13": "EP2PSB6BT713",
            "14": "EP2PSB6BT714",
            "15": "EP2PSB6BT715",
            "24": "EP2PSB6BT724",
            "31": "EP2PSB6BT731",
            "41": "EP2PSB6BT741",
            "42": "EP2PSB6BT742",
            "51": "EP2PSB6BT751",
            "00": "EP2PSB6BT700",
            "20": "EP2PSB6BT720",
            "30": "EP2PSB6BT730",
            "40": "EP2PSB6BT740",
            "50": "EP2PSB6BT750",
            "60": "EP2PSB6BT760",
            "02": "EP2PSB6BT702",
            "03": "EP2PSB6BT703",
            "04": "EP2PSB6BT704",
            "05": "EP2PSB6BT705",
            "06": "EP2PSB6BT706",
            "33": "EP2PSB6BT733",
            "12": "EP2PSB6BT712"
        };

        const combinedValue = noValue + ncValue;
        const code = codes[combinedValue] || 'Invalid Code';

        if (code === 'Invalid Code') {
            noImageContainer.classList.add('hidden');
            ncImageContainer.classList.add('hidden');
            plus1.style.display = 'none';
            plus2.style.display = 'none';
            generatedCodeElement.textContent = 'Generated Code: Invalid Code';
            descriptionContainer.classList.add('hidden'); // Hide description for invalid code
            resultContainer.classList.remove('hidden'); // Show result div
        } else {
            generatedCodeElement.textContent = `ORDERING CODE: ${code}`;
            descriptionContainer.querySelector('#description-title').textContent = 'Description:';
            descriptionContainer.classList.remove('hidden'); // Show description
            resultContainer.classList.remove('hidden'); // Show result div
        }
    } else {
        resultContainer.classList.add('hidden'); // Hide result if no input
    }
}

// Monitor input changes to update generated code and show images
document.getElementById('bootEsixsinputno').addEventListener('input', bootEyellowGenerateCode);
document.getElementById('bootEsixsinputnc').addEventListener('input', bootEyellowGenerateCode);

// Add event listener to the "Flush" button
document.querySelector('.flush').addEventListener('click', function () {
    // Select all forms with the class 'flushform' and reset their inputs
    const flushForms = document.querySelectorAll('.flushform');
    flushForms.forEach(function (form) {
        // Reset each form individually
        form.reset();
    });

    // Reset images and hide plus symbols
    document.getElementById('bootEnoimageContainer').classList.add('hidden');
    document.getElementById('bootEncimageContainer').classList.add('hidden');
    document.getElementById('bootyellowimageContainer').classList.remove('hidden');
    document.getElementById('bootplus1').style.display = 'none';
    document.getElementById('bootplus2').style.display = 'none';

    // Hide the result and description
    document.getElementById('result').classList.add('hidden');
    document.getElementById('description').classList.add('hidden');
});


