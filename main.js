//tạo danh sách sinh viên
// var list = [];
//Tạo đối tượng dssv từ lớp đối tượng dssv
var dssv = new DanhSachSinhVien();
var validation = new Validation();

function addUser() {
  console.log("Đây là add user của dhbinh2");
}

function getEle(id) {
  return document.getElementById(id);
}
//Lấy data từ localStorage
getLocalStorage();
/**
 * thên sinh viên
 */

//cách 2
// getEle("btnAdd").onclick = function () {
//   console.log(123);
// };

//cách 3 : callback funtion:tham số của một hàm là một hàm khác
getEle("btnAdd").addEventListener("click", function (event) {
  //chặn trang web bị load lại trong form
  event.preventDefault();

  // Lấy thông tin người dùng

  var sinhVien = layDuLieuDauVao(true);

  // console.log(sinhVien);con

  // var _maSV = getEle("txtMaSV").value;
  // var _tenSV = getEle("txtTenSV").value;
  // var _email = getEle("txtEmail").value;
  // var _matKhau = getEle("txtPass").value;
  // var _ngaySinh = getEle("txtNgaySinh").value;
  // var _khoaHoc = getEle("khSV").value;
  // var _diemToan = getEle("txtDiemToan").value;
  // var _diemLy = getEle("txtDiemLy").value;
  // var _diemHoa = getEle("txtDiemHoa").value;

  //Tạo đối tượng SV
  //   var sinhVien = {
  //     //key : value,
  //     maSV: _maSV,
  //     tenSV: _tenSV,
  //     email: _email,
  //     matKhau: _matKhau,
  //     ngaySinh: _ngaySinh,
  //     khoaHoc: _khoaHoc,
  //     diemToan: _diemToan,
  //     diemLy: _diemLy,
  //     diemHoa: _diemHoa,

  //     tinhDTB: function () {
  //       return (
  //         (parseFloat(this.diemToan) +
  //           parseFloat(this.diemLy) +
  //           parseFloat(this.diemHoa)) /
  //         3
  //       );
  //     },
  // //   };

  // // isvalid là true =>cho phép thêm vào mảng
  // var isValid = true;
  // /**
  //  * Validation(kiểm tra tính hợp lệ dữ liệu trước khi thêm)
  //  */

  // // kiểm tra input Mã SV

  // isValid &=
  //   validation.kiemTraRong(_maSV, "divMaErr", "(*)Mã SV không được rỗng") &&
  //   validation.kiemTraDoDaiKyTu(
  //     _maSV,
  //     "divMaErr",
  //     "Độ dài kí tự từ 4 tới 10",
  //     4,
  //     10
  //   ) &&
  //   validation.kiemTraMaSVTrung(
  //     _maSV,
  //     "divMaErr",
  //     "Mã SV đã tồn tại",
  //     dssv.list
  //   );
  // isValid &=
  //   validation.kiemTraRong(_tenSV, "divTenErr", "(*)Ten SV không được rỗng") &&
  //   validation.kiemTraKyTuChuoi(_tenSV, "divTenErr", "Tên SV phải là chữ");
  // isValid &=
  //   validation.kiemTraRong(
  //     _email,
  //     "divEmailErr",
  //     "(*)Email SV không được rỗng"
  //   ) &&
  //   validation.kiemTraEmail(
  //     _email,
  //     "divEmailErr",
  //     "(*)Email không đúng định dạng"
  //   );
  // isValid &=
  //   validation.kiemTraRong(
  //     _matKhau,
  //     "divMatKhauErr",
  //     "(*)MatKhau SV không được rỗng"
  //   ) &&
  //   validation.kiemTraMatKhau(
  //     _matKhau,
  //     "divMatKhauErr",
  //     "(*)Mật khẩu chưa đúng định dạng"
  //   );
  // isValid &=
  //   validation.kiemTraRong(
  //     _ngaySinh,
  //     "divNgaySinhErr",
  //     "(*)Ngaysinh không được rỗng"
  //   ) &&
  //   validation.kiemTraNgaySinh(
  //     _ngaySinh,
  //     "divNgaySinhErr",
  //     "(*) Lỗi ngày sinh"
  //   );
  // isValid &= validation.kiemTraKhoaHoc(
  //   "khSV",
  //   "divKHErr",
  //   "Vui lòng chọn khóa học"
  // );
  // isValid &=
  //   validation.kiemTraRong(
  //     _diemToan,
  //     "divToanErr",
  //     "(*)DiemToan không được rỗng"
  //   ) && validation.kiemTraSo(_diemToan, "divToanErr", "Nhập điểm Toán");
  // isValid &=
  //   validation.kiemTraRong(_diemLy, "divLyErr", "(*)DiemLy không được rỗng") &&
  //   validation.kiemTraSo(_diemLy, "divLyErr", "Nhập điểm Ly");
  // isValid &=
  //   validation.kiemTraRong(
  //     _diemHoa,
  //     "divHoaErr",
  //     "(*)DiemHoa không được rỗng"
  //   ) && validation.kiemTraSo(_diemHoa, "divHoaErr", "Nhập điểm Hoa");
  // //kiemtra input Tên SV

  // //tạo đối tượng sinhVien
  // var sinhVien = new SinhVien(
  //   _maSV,
  //   _tenSV,
  //   _email,
  //   _matKhau,
  //   _ngaySinh,
  //   _khoaHoc,
  //   _diemToan,
  //   _diemLy,
  //   _diemHoa
  // );

  // chức năng thêm sv
  //xóa sv, sửa sv, cập nhật, tìm kiếm

  //kiểm tra=> nếu hợp lệ => thêm SV
  if (sinhVien) {
    sinhVien.tinhDTB();
    dssv.themSinhVien(sinhVien);
    taoBang(dssv.list);
    // lưu xuống Storage
    setLocalStorage();
  }
});

function taoBang(arr) {
  //reset tbody
  getEle("tbodySinhVien").innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    //tạo dòng(tr)
    var tagTR = document.createElement("tr");

    //tạo cột (td -6 cột)
    var tagTD_MaSV = document.createElement("td");
    var tagTD_TenSV = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_NgaySinh = document.createElement("td");
    var tagTD_KhoaHoc = document.createElement("td");
    var tagTD_DTB = document.createElement("td");
    var tagTD_Button_Edit = document.createElement("td");
    var tagTD_Button_Delete = document.createElement("td");

    // Tạo nội dung cho 6 cột

    tagTD_MaSV.innerHTML = arr[i].maSV;
    tagTD_TenSV.innerHTML = arr[i].tenSV;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_NgaySinh.innerHTML = arr[i].ngaySinh;
    tagTD_KhoaHoc.innerHTML = arr[i].khoaHoc;

    tagTD_DTB.innerHTML = arr[i].diemTB;
    tagTD_Button_Edit.innerHTML =
      "<button onclick=\"suaSinhVien('" +
      arr[i].maSV +
      '\')" class="btn btn-info">Sửa</button>';
    tagTD_Button_Delete.innerHTML =
      "<button onclick=\"xoaSinhVien('" +
      arr[i].maSV +
      '\')" class="btn btn-danger">Xóa</button>';

    //appendChild 6 cột vào dòng

    tagTR.appendChild(tagTD_MaSV);
    tagTR.appendChild(tagTD_TenSV);
    tagTR.appendChild(tagTD_Email);
    tagTR.appendChild(tagTD_NgaySinh);
    tagTR.appendChild(tagTD_KhoaHoc);
    tagTR.appendChild(tagTD_DTB);
    tagTR.appendChild(tagTD_Button_Edit);

    tagTR.appendChild(tagTD_Button_Delete);

    //appendChild dòng vào tbody
    getEle("tbodySinhVien").appendChild(tagTR);
  }
}

function xoaSinhVien(maSV) {
  dssv._xoaSinhVien(maSV);
  taoBang(dssv.list);
  setLocalStorage();
}
function suaSinhVien(maSV) {
  var sinhVien = dssv.layThongTinSinhVien(maSV);
  getEle("btnUpdate").style.display = "inline-block";
  //Dom tới các thẻ input =>show ra
  getEle("txtMaSV").value = sinhVien.maSV;
  getEle("txtMaSV").disabled = true;

  getEle("txtTenSV").value = sinhVien.tenSV;
  getEle("txtEmail").value = sinhVien.email;
  getEle("txtPass").value = sinhVien.matKhau;
  getEle("txtNgaySinh").value = sinhVien.ngaySinh;
  getEle("khSV").value = sinhVien.khoaHoc;
  getEle("txtDiemToan").value = sinhVien.diemToan;
  getEle("txtDiemLy").value = sinhVien.diemLy;
  getEle("txtDiemHoa").value = sinhVien.diemHoa;

  // console.log(maSV);
}

getEle("btnUpdate").addEventListener("click", function () {
  var sinhVien = layDuLieuDauVao(false);
  sinhVien.tinhDTB();

  dssv.capNhatSinhVien(sinhVien);
  taoBang(dssv.list);
  setLocalStorage();
});
function layDuLieuDauVao(isAdd) {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _email = getEle("txtEmail").value;
  var _matKhau = getEle("txtPass").value;
  var _ngaySinh = getEle("txtNgaySinh").value;
  var _khoaHoc = getEle("khSV").value;
  var _diemToan = getEle("txtDiemToan").value;
  var _diemLy = getEle("txtDiemLy").value;
  var _diemHoa = getEle("txtDiemHoa").value;

  var isValid = true;
  /**
   * Validation(kiểm tra tính hợp lệ dữ liệu trước khi thêm)
   */

  // kiểm tra input Mã SV
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(_maSV, "divMaErr", "(*)Mã SV không được rỗng") &&
      validation.kiemTraDoDaiKyTu(
        _maSV,
        "divMaErr",
        "Độ dài kí tự từ 4 tới 10",
        4,
        10
      ) &&
      validation.kiemTraMaSVTrung(
        _maSV,
        "divMaErr",
        "Mã SV đã tồn tại",
        dssv.list
      );
  }
  isValid &=
    validation.kiemTraRong(_tenSV, "divTenErr", "(*)Ten SV không được rỗng") &&
    validation.kiemTraKyTuChuoi(_tenSV, "divTenErr", "Tên SV phải là chữ");
  isValid &=
    validation.kiemTraRong(
      _email,
      "divEmailErr",
      "(*)Email SV không được rỗng"
    ) &&
    validation.kiemTraEmail(
      _email,
      "divEmailErr",
      "(*)Email không đúng định dạng"
    );

  isValid &=
    validation.kiemTraRong(
      _matKhau,
      "divMatKhauErr",
      "(*)MatKhau SV không được rỗng"
    ) &&
    validation.kiemTraMatKhau(
      _matKhau,
      "divMatKhauErr",
      "(*)Mật khẩu chưa đúng định dạng"
    );

  isValid &=
    validation.kiemTraRong(
      _ngaySinh,
      "divNgaySinhErr",
      "(*)Ngaysinh không được rỗng"
    ) &&
    validation.kiemTraNgaySinh(
      _ngaySinh,
      "divNgaySinhErr",
      "(*) Lỗi ngày sinh"
    );

  isValid &= validation.kiemTraKhoaHoc(
    "khSV",
    "divKHErr",
    "Vui lòng chọn khóa học"
  );
  isValid &=
    validation.kiemTraRong(
      _diemToan,
      "divToanErr",
      "(*)DiemToan không được rỗng"
    ) && validation.kiemTraSo(_diemToan, "divToanErr", "Nhập điểm Toán");
  isValid &=
    validation.kiemTraRong(_diemLy, "divLyErr", "(*)DiemLy không được rỗng") &&
    validation.kiemTraSo(_diemLy, "divLyErr", "Nhập điểm Ly");
  isValid &=
    validation.kiemTraRong(
      _diemHoa,
      "divHoaErr",
      "(*)DiemHoa không được rỗng"
    ) && validation.kiemTraSo(_diemHoa, "divHoaErr", "Nhập điểm Hoa");
  //kiemtra input Tên SV

  //tạo đối tượng sinhVien
  // bi cho nay ne em
  if (isValid == true) {
    var sinhVien = new SinhVien(
      _maSV,
      _tenSV,
      _email,
      _matKhau,
      _ngaySinh,
      _khoaHoc,
      _diemToan,
      _diemLy,
      _diemHoa
    );
    // console.log(sinhVien);
    return sinhVien;
  }
  return null;
}

getEle("btnReset").addEventListener("click", function () {
  //Dom tới các thẻ input gán rỗng hết
  getEle("formSV").reset();
  getEle("btnUpdate").style.display = "none";
  getEle("txtMaSV").disabled = false;
  getEle("divMaErr").innerHTML = "";
  getEle("divMaErr").className = "";
  getEle("divTenErr").innerHTML = "";
  getEle("divTenErr").className = "";
  getEle("divEmailErr").innerHTML = "";
  getEle("divEmailErr").className = "";
  getEle("divMatKhauErr").innerHTML = "";
  getEle("divMatKhauErr").className = "";
  getEle("divNgaySinhErr").innerHTML = "";
  getEle("divNgaySinhErr").className = "";
  getEle("divKHErr").innerHTML = "";
  getEle("divKHErr").className = "";
  getEle("divToanErr").innerHTML = "";
  getEle("divToanErr").className = "";
  getEle("divLyErr").innerHTML = "";
  getEle("divLyErr").className = "";
  getEle("divHoaErr").innerHTML = "";
  getEle("divHoaErr").className = "";
});

/**Tìm kiếm sinh viên */
getEle("txtSearch").addEventListener("keyup", function () {
  var keyWord = getEle("txtSearch").value;
  var mangTimKiem = dssv.timKiemSinhVien(keyWord);
  taoBang(mangTimKiem);
});

function setLocalStorage() {
  //chuyển kiểu Json sang String
  var arrString = JSON.stringify(dssv.list);
  localStorage.setItem("DSSV", arrString);
}
function getLocalStorage() {
  //chuyển kiểu string sang Json
  if (localStorage.getItem("DSSV")) {
    var data = localStorage.getItem("DSSV");
    dssv.list = JSON.parse(data);
    taoBang(dssv.list);
  }
}
