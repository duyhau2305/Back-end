// services/productionOrderService.js
const ProductionOrder = require('../models/ProductionOrder');

// Lấy tất cả các đơn hàng sản xuất
const getAllProductionOrders = async () => {
    return await ProductionOrder.find();
};

// Tạo mới đơn hàng sản xuất
const createProductionOrder = async (data) => {
    const newOrder = new ProductionOrder(data);
    return await newOrder.save();
};

// Cập nhật đơn hàng sản xuất
const updateProductionOrder = async (id, data) => {
    return await ProductionOrder.findByIdAndUpdate(id, data, { new: true });
};

// Xóa đơn hàng sản xuất
const deleteProductionOrder = async (id) => {
    return await ProductionOrder.findByIdAndDelete(id);
};

module.exports = {
    getAllProductionOrders,
    createProductionOrder,
    updateProductionOrder,
    deleteProductionOrder
};
