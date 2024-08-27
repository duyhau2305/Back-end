// controllers/productionOrderController.js
const productionOrderService = require('../services/productionOrderService.');

// Lấy tất cả các đơn hàng sản xuất
const getProductionOrders = async (req, res) => {
  try {
    const orders = await productionOrderService.getAllProductionOrders();
    res.status(200).json(orders);
    console.log("thông tin :  ",orders)
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy đơn hàng sản xuất', error: error.message });
  }
};

// Tạo mới đơn hàng sản xuất
const createProductionOrder = async (req, res) => {
  try {
    const newOrder = await productionOrderService.createProductionOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo đơn hàng sản xuất', error: error.message });
  }
};

// Cập nhật đơn hàng sản xuất
const updateProductionOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await productionOrderService.updateProductionOrder(id, req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật đơn hàng sản xuất', error: error.message });
  }
};

// Xóa đơn hàng sản xuất
const deleteProductionOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await productionOrderService.deleteProductionOrder(id);
    res.status(204).json({ message: 'Xóa đơn hàng sản xuất thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa đơn hàng sản xuất', error: error.message });
  }
};

module.exports = {
  getProductionOrders,
  createProductionOrder,
  updateProductionOrder,
  deleteProductionOrder
};
