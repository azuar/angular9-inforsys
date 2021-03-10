import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.title = 'Products';
    this.getBooks();
  }

  getBooks() {
    this.books = [
      {
        title: 'Belajar Angular 9 Untuk Pemula',
        author: 'Azuar',
        publisher: 'Ctech _Studio',
        year: 2021,
        isbn: '19208789KB',
        price: 94000
      },
      {
        title: 'Belajar CodeIgniter 4 Untuk Pemula',
        author: 'Nurdahlia',
        publisher: 'Ctech _Studio',
        year: 2020,
        isbn: '19891648JP',
        price: 127000
      },
      {
        title: 'Belajar Laravel Untuk Pemula',
        author: 'Rizky Apriani',
        publisher: 'Ctech _Studio',
        year: 2020,
        isbn: '15891342KP',
        price: 198000
      }
    ]
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
          this.books[idx] = res;
      }
    })
  }
  deleteProduct(idx) {
    var conf = confirm('Apakah Anda Yakin Ingin Menghapus ?');
    if (conf) {
      this.books.splice(idx, 1);
    }
  }

}
