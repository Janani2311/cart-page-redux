export const totalPrice = (array) => {
    let total = 0;
    array.forEach((e) => {
        total += e.subtotal;
    });
    return total;
}