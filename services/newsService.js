const News = require('../models/newsModel');

const getAllNews = async () => {
    return await News.find();
};

const getNewsById = async (id) => {
    return await News.findById(id);
};

const createNews = async (data) => {
    const news = new News(data);
    return await news.save();
};

const updateNews = async (id, data) => {
    return await News.findByIdAndUpdate(id, data, { new: true });
};

const deleteNews = async (id) => {
    return await News.findByIdAndDelete(id);
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
};
