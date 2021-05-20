const color = [
  // Theme
  { code: 'primary', normal: '#0D6EFD', bootstrap: 'yellow' },
  { code: 'secondary', normal: '#6C757D', bootstrap: 'secondary' },
  { code: 'success', normal: '#198754', bootstrap: 'success' },
  { code: 'info', normal: '#0DCAF0', bootstrap: 'info' },
  { code: 'warning', normal: '#FFC107', bootstrap: 'warning' },
  { code: 'danger', normal: '#DC3545', bootstrap: 'danger' },
  { code: 'light', normal: '#F8F9FA', bootstrap: 'light' },
  { code: 'dark', normal: '#212529', bootstrap: 'dark' },
  { code: 'white', normal: '#FFFFFF', bootstrap: 'white' },
  { code: 'black', normal: '#000000', bootstrap: 'black' },
  { code: 'transparent', normal: 'transparent', bootstrap: 'transparent' },
  // Yellow
  { code: 'Y', normal: '#FFD026', bootstrap: 'yellow' },
  { code: 'Y50', normal: '#FFF9E1', bootstrap: 'yellow-50' },
  { code: 'Y100', normal: '#FFEEB4', bootstrap: 'yellow-100' },
  { code: 'Y200', normal: '#FFE483', bootstrap: 'yellow-200' },
  { code: 'Y300', normal: '#FFDA4F', bootstrap: 'yellow-300' },
  { code: 'Y400', normal: '#FFD026', bootstrap: 'yellow-400' },
  { code: 'Y500', normal: '#FFC800', bootstrap: 'yellow-500' },
  { code: 'Y600', normal: '#FFB900', bootstrap: 'yellow-600' },
  { code: 'Y700', normal: '#FFA600', bootstrap: 'yellow-700' },
  { code: 'Y800', normal: '#FF9500', bootstrap: 'yellow-800' },
  { code: 'Y900', normal: '#FF7500', bootstrap: 'yellow-900' },
  // Green
  { code: 'G', normal: '#16A75C', bootstrap: 'green' },
  { code: 'G50', normal: '#E6F6EC', bootstrap: 'green-50' },
  { code: 'G100', normal: '#C3E9D0', bootstrap: 'green-100' },
  { code: 'G200', normal: '#9BDBB3', bootstrap: 'green-200' },
  { code: 'G300', normal: '#70CD94', bootstrap: 'green-300' },
  { code: 'G400', normal: '#4DC27E', bootstrap: 'green-400' },
  { code: 'G500', normal: '#1FB767', bootstrap: 'green-500' },
  { code: 'G600', normal: '#16A75C', bootstrap: 'green-600' },
  { code: 'G700', normal: '#069550', bootstrap: 'green-700' },
  { code: 'G800', normal: '#008444', bootstrap: 'green-800' },
  { code: 'G900', normal: '#006430', bootstrap: 'green-900' },
  // Blue
  { code: 'B', normal: '#1E88E5', bootstrap: 'blue' },
  { code: 'B50', normal: '#E3F2FD', bootstrap: 'blue-50' },
  { code: 'B100', normal: '#BBDEFB', bootstrap: 'blue-100' },
  { code: 'B200', normal: '#90CAF9', bootstrap: 'blue-200' },
  { code: 'B300', normal: '#64B5F6', bootstrap: 'blue-300' },
  { code: 'B400', normal: '#42A5F5', bootstrap: 'blue-400' },
  { code: 'B500', normal: '#2196F3', bootstrap: 'blue-500' },
  { code: 'B600', normal: '#1E88E5', bootstrap: 'blue-600' },
  { code: 'B700', normal: '#1976D2', bootstrap: 'blue-700' },
  { code: 'B800', normal: '#1565C0', bootstrap: 'blue-800' },
  { code: 'B900', normal: '#0D47A1', bootstrap: 'blue-900' },
  // Pink
  { code: 'PK', normal: '#FF4D77', bootstrap: 'pink' },
  { code: 'PK50', normal: '#FFE6EC', bootstrap: 'pink-50' },
  { code: 'PK100', normal: '#FFBFCF', bootstrap: 'pink-100' },
  { code: 'PK200', normal: '#FF96AF', bootstrap: 'pink-200' },
  { code: 'PK300', normal: '#FF6C8F', bootstrap: 'pink-300' },
  { code: 'PK400', normal: '#FF4D77', bootstrap: 'pink-400' },
  { code: 'PK500', normal: '#FD355F', bootstrap: 'pink-500' },
  { code: 'PK600', normal: '#EC305D', bootstrap: 'pink-600' },
  { code: 'PK700', normal: '#D62A59', bootstrap: 'pink-700' },
  { code: 'PK800', normal: '#C12357', bootstrap: 'pink-800' },
  { code: 'PK900', normal: '#9D1951', bootstrap: 'pink-900' },
  // Red
  { code: 'R', normal: '#F44336', bootstrap: 'red' },
  { code: 'R50', normal: '#FFEBEE', bootstrap: 'red-50' },
  { code: 'R100', normal: '#FFCDD2', bootstrap: 'red-100' },
  { code: 'R200', normal: '#EF9A9A', bootstrap: 'red-200' },
  { code: 'R300', normal: '#E57373', bootstrap: 'red-300' },
  { code: 'R400', normal: '#EF5350', bootstrap: 'red-400' },
  { code: 'R500', normal: '#F44336', bootstrap: 'red-500' },
  { code: 'R600', normal: '#E53935', bootstrap: 'red-600' },
  { code: 'R700', normal: '#D32F2F', bootstrap: 'red-700' },
  { code: 'R800', normal: '#C62828', bootstrap: 'red-800' },
  { code: 'R900', normal: '#B71B1C', bootstrap: 'red-900' },
  // Purple
  { code: 'P', normal: '#AB47BC', bootstrap: 'purple' },
  { code: 'P50', normal: '#F3E5F5', bootstrap: 'purple-50' },
  { code: 'P100', normal: '#E1BEE7', bootstrap: 'purple-100' },
  { code: 'P200', normal: '#CE93D8', bootstrap: 'purple-200' },
  { code: 'P300', normal: '#BA68C8', bootstrap: 'purple-300' },
  { code: 'P400', normal: '#AB47BC', bootstrap: 'purple-400' },
  { code: 'P500', normal: '#9B27B0', bootstrap: 'purple-500' },
  { code: 'P600', normal: '#8D24AA', bootstrap: 'purple-600' },
  { code: 'P700', normal: '#7A1FA2', bootstrap: 'purple-700' },
  { code: 'P800', normal: '#691B9A', bootstrap: 'purple-800' },
  { code: 'P900', normal: '#49148C', bootstrap: 'purple-900' },
  // Gray
  { code: 'G', normal: '#212121', bootstrap: 'gray' },
  { code: 'G50', normal: '#FAFAFA', bootstrap: 'gray-50' },
  { code: 'G100', normal: '#F5F5F5', bootstrap: 'gray-100' },
  { code: 'G200', normal: '#EEEEEE', bootstrap: 'gray-200' },
  { code: 'G300', normal: '#E0E0E0', bootstrap: 'gray-300' },
  { code: 'G400', normal: '#BDBDBD', bootstrap: 'gray-400' },
  { code: 'G500', normal: '#9E9E9E', bootstrap: 'gray-500' },
  { code: 'G600', normal: '#757575', bootstrap: 'gray-600' },
  { code: 'G700', normal: '#616161', bootstrap: 'gray-700' },
  { code: 'G800', normal: '#424242', bootstrap: 'gray-800' },
  { code: 'G900', normal: '#212121', bootstrap: 'gray-900' },
  // Blue Gray
  { code: 'BG', normal: '#001B3D', bootstrap: 'blue-gray' },
  { code: 'BG50', normal: '#E3E7ED', bootstrap: 'blue-gray-50' },
  { code: 'BG100', normal: '#B9C3D3', bootstrap: 'blue-gray-100' },
  { code: 'BG200', normal: '#8D9DB5', bootstrap: 'blue-gray-200' },
  { code: 'BG300', normal: '#627798', bootstrap: 'blue-gray-300' },
  { code: 'BG400', normal: '#415C84', bootstrap: 'blue-gray-400' },
  { code: 'BG500', normal: '#1A4373', bootstrap: 'blue-gray-500' },
  { code: 'BG600', normal: '#133C6B', bootstrap: 'blue-gray-600' },
  { code: 'BG700', normal: '#083461', bootstrap: 'blue-gray-700' },
  { code: 'BG800', normal: '#022B55', bootstrap: 'blue-gray-800' },
  { code: 'BG900', normal: '#001B3D', bootstrap: 'blue-gray-900' },
];

const codeConvert = (type, code) => {
  const find = color.find(obj => {
    return obj.code === code
  })

  let result;
  if (type === 'normal') {
    result = find.normal;
  } else if (type === 'bootstrap') {
    result = find.bootstrap;
  }

  return result;
}

export const getCode = codeConvert;