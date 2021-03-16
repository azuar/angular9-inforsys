import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: any;
  book: any;
  books: any;
  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) {
  }

  ngOnInit(): void {
    this.title = 'Products';
    this.getBooks();
  }

  getBooks() {
    this.api.get('books').subscribe(result => {
      this.books = result;
    })
  }

  productDetail(data, idx) {
    let dialog = this.dialog.open(ProductDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.books.push(res);
        //jika tidak maka perbarui data
        else
          this.books[idx] = data;
      }
    })
  }
  deleteProduct(id, idx) {
    var conf = confirm('Apakah Anda Yakin Ingin Menghapus ?');
    if (conf) {
      this.api.delete('books/' + id).subscribe(res => {
        this.books.splice(idx, 1);
      });
    }
  }

}
