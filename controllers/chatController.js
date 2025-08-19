const Chat = require('../models/Chat');

const createChatController = async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const chat = await Chat.create({ name, phone });
    return res.status(200).json({ message: 'Chat created', chat });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllChatsController = async (req, res) => {
  try {
    const chats = await Chat.find();
    return res.status(200).json(chats);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getChatByIdController = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    return res.status(200).json(chat);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateChatController = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      { name, phone },
      { new: true, runValidators: true }
    );
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    return res.status(200).json({ message: 'Chat updated', chat });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteChatController = async (req, res) => {
  try {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    return res.status(200).json({ message: 'Chat deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createChatController,
  getAllChatsController,
  getChatByIdController,
  updateChatController,
  deleteChatController
};
