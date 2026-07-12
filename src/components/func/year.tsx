export function DevYear() {
    const nasc = new Date(2007, 4, 29); // 29 de Maio de 2007
    const td = new Date();

    let idade = td.getFullYear() - nasc.getFullYear();
    if (
        td.getMonth() < nasc.getMonth() || (td.getMonth() === nasc.getMonth() && td.getDate() < nasc.getDate())
    ) {
        idade--;
    }
    return String(idade);
}