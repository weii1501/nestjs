import {Injectable} from "@nestjs/common";
import {Product} from "../../models/product.model";

@Injectable()
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      categoryId: 2,
      price: 800000,
      productName: 'Keyboard'
    },
    {
      id: 3,
      categoryId: 4,
      price: 500000,
      productName: 'Mouse'
    }
  ]

  getProduct(): Product[] {
    return this.products
  }

  createProduct(): string {
    return 'POST PRODUCT'
  }

  detailProduct(id: number): Product {
    return this.products.find(product => product.id === Number(id))
  }

  updateProduct(): string {
    return 'UPDATE PRODUCT'
  }

  deleteProduct(): string {
    return 'DELETE PRODUCT'
  }
}