function doitien() {
    let sotien = document.getElementById('nhapsotien').value;
    let giatri1 = document.getElementById('giatri1').value;
    let giatri2 = document.getElementById('giatri2').value;
    if (giatri1 == giatri2) {
        document.getElementById('sauquydoi').innerHTML = "Cùng giá trị chuyển đổi. Vui lòng chọn loại tiền tệ cần quy đổi";
    }
    else
        if (giatri1 == "s1" && giatri2 == "s2") {
        document.getElementById('sauquydoi').innerHTML = sotien / 23000 + "USD";
    } else {
        document.getElementById('sauquydoi').innerHTML = sotien * 23000 + "VNĐ";
    }
}