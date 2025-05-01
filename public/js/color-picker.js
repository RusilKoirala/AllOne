function updateColor() {
    const color = document.getElementById('colorInput').value;

    // Update Hex Value
    document.getElementById('hexValue').textContent = color;

    // Convert Hex to RGB
    const rgb = hexToRgb(color);
    document.getElementById('rgbValue').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // Convert Hex to HSL
    const hsl = hexToHsl(color);
    document.getElementById('hslValue').textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}

// Function to convert Hex to RGB
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }

    return { r, g, b };
}

// Function to convert Hex to HSL
function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    let h = 0, s = 0, l = (max + min) / 2;

    if (diff !== 0) {
        s = diff / (1 - Math.abs(2 * l - 1));
        if (max === r) {
            h = (g - b) / diff + (g < b ? 6 : 0);
        } else if (max === g) {
            h = (b - r) / diff + 2;
        } else {
            h = (r - g) / diff + 4;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}
