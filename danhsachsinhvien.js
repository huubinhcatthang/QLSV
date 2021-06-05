function DanhSachSinhVien() {
  this.list = [];
  this.themSinhVien = function (sv) {
    this.list.push(sv);
  };
  this._timViTri = function (maSV) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == maSV) {
        index = i;
        break;
      }
    }
    return index;
  };
  this._xoaSinhVien = function (maSV) {
    /** tìm vị trí mã sv muốn xóa thông qua mảng list
     * 0.index=-1;
     * 1. duyệt mảng this.list
     * 2. Nếu item.maSV==maSV => lấy index (i)
     * 3. splice(index,1)
     */
    var index = this._timViTri(maSV);
    if (index != -1) {
      this.list.splice(index, 1);
    }
  };
  this.layThongTinSinhVien = function (maSV) {
    //Lấy vị trí
    var index = this._timViTri(maSV);
    if (index != -1) {
      return this.list[index];
    }
  };
  this.capNhatSinhVien = function (sinhVien) {
    var index = this._timViTri(sinhVien.maSV);
    if (index != -1) {
      this.list[index] = sinhVien;
    }
  };

  // this.timKiemSinhVien=function(keyword){

  // }
}

DanhSachSinhVien.prototype.timKiemSinhVien = function (keyword) {
  /**0.tạo mảng tìm kiếm =[];
   * 1.duyệt mảng list
   * 2.nếu như keyword trùng với sinhVien.tenSV => tìm thấy :thêm vào mảng tìm kiếm
   * 3.trả về mảng tìm kiếm
   */
  var mangTimKiem = [];
  for (var i = 0; i < this.list.length; i++) {
    if (
      this.list[i].tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    ) {
      mangTimKiem.push(this.list[i]);
    }
  }
  return mangTimKiem;
};
