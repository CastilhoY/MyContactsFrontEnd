import HttpClient from "./utils/HttpClient";

class categoriesService {
  constructor(){
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  listCategories(){
    return this.httpClient.get('/categories')
  }
}

const CategoriesService = new categoriesService();

export default CategoriesService;
