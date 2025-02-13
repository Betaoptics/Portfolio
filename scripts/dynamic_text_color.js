function getBrightness(hex) {
    // Convert HEX to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Calculate brightness (YIQ formula)
    return (r * 299 + g * 587 + b * 114) / 1000;
}

function adjustTextColor() {
    document.querySelectorAll('.label').forEach(label => {
        let bgColor = getComputedStyle(label).getPropertyValue('--bg-color').trim();

        // Convert CSS color to HEX (if needed)
        let tempElem = document.createElement("div");
        tempElem.style.color = bgColor;
        document.body.appendChild(tempElem);
        let computedColor = getComputedStyle(tempElem).color;
        document.body.removeChild(tempElem);

        let rgbValues = computedColor.match(/\d+/g);
        if (rgbValues) {
            bgColor = `#${parseInt(rgbValues[0]).toString(16).padStart(2, '0')}${parseInt(rgbValues[1]).toString(16).padStart(2, '0')}${parseInt(rgbValues[2]).toString(16).padStart(2, '0')}`;
        }

        // Check brightness and adjust text color
        let brightness = getBrightness(bgColor);
        label.style.color = brightness > 150 ? "#333" : "white"; // Dark text if background is bright
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", adjustTextColor);