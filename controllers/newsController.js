import * as newsModel from '../models/newsModel.js';

export const getNews = async (req, res) => {
    try {
        const news = await newsModel.getNews();
        res.status(200).json(news);
    } catch (error) {
        res.status(401).json({ error: 'No hay noticias disponibles' });
    }    
}

export const insertNews = async (req, res) => {
    const user_id = req.body.user_id;
    const content = req.body.content;
    const publication_date = req.body.publication_date;
    try {
        await newsModel.insertNews(user_id, content, publication_date);
        res.status(201).json({ message: 'Noticia insertada correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar la noticia' });
    }    
}

export const deleteNews = async (req, res) => {
    const idNews = req.body.newsId;
    try {
        await newsModel.deleteNews(idNews);
        res.status(200).json({ message: 'Noticia eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: 'Error al eliminar la noticia' });
    }    
}
