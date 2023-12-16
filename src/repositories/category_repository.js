const Category = require('../models/category');

class CategoryRepository {
    async getCategories() {
        try {
            const response = await Category.findAll();
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async getCategory(id) {
        try {
            const response = await Category.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async createCategory(name, description) {
        try {
            const response = await Category.create({
                name,
                description
            });
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    async destroyCategory(categoryId) {
        try {
            const response = await Category.destroy({
                where: {
                    id: categoryId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
        }
    }
    
}


module.exports = CategoryRepository;