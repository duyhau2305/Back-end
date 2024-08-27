const newsService = require('../services/newsService'); // Import service để xử lý logic nghiệp vụ

// Hàm lấy tất cả tin tức
const getNews = async (req, res) => {
    try {
        const news = await newsService.getAllNews();
        res.json(news); // Trả về danh sách tin tức dưới dạng JSON
    } catch (error) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Hàm lấy tin tức theo ID
const getNewsById = async (req, res) => {
    try {
        const news = await newsService.getNewsById(req.params.id);
        if (news) {
            res.json(news); // Trả về tin tức theo ID
        } else {
            res.status(404).json({ error: 'Không tìm thấy tin tức' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Hàm tạo mới một tin tức
const createNews = async (req, res) => {
    try {
        const newNews = await newsService.createNews(req.body); // Tạo mới tin tức
        res.status(201).json(newNews); // Trả về tin tức mới tạo
    } catch (error) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Hàm cập nhật tin tức theo ID
const updateNews = async (req, res) => {
    try {
        const updatedNews = await newsService.updateNews(req.params.id, req.body); // Cập nhật tin tức
        if (updatedNews) {
            res.json(updatedNews); // Trả về tin tức đã được cập nhật
        } else {
            res.status(404).json({ error: 'Không tìm thấy tin tức' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Hàm xóa tin tức theo ID
const deleteNews = async (req, res) => {
    try {
        const deletedNews = await newsService.deleteNews(req.params.id); // Xóa tin tức
        if (deletedNews) {
            res.json({ message: 'Tin tức đã được xóa thành công' });
        } else {
            res.status(404).json({ error: 'Không tìm thấy tin tức' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Export các hàm để sử dụng trong router
module.exports = {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
};
