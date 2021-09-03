const calculateBMI = (weight, height) => {
    return (weight / height / height) * 10000;
}

export { calculateBMI };

// console.log(calculateBMI(59, 165));