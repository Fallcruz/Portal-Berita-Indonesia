export default function FormatDate(date) {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const d = new Date(date);
    let month = months[d.getMonth()];
    return `${d.getDate()} ${month} ${d.getFullYear()}`;
}