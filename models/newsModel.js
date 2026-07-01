import * as db from '../db/db.js'

export const getNews = async() => {
    const news = await db.query(
        `SELECT  news_id,users.username, news.content, news.publication_date FROM news INNER JOIN users ON news.user_id = users.userid ORDER BY publication_date DESC LIMIT 7`
    );
    return news.rows;
}

export const insertNews = async(user_id, content, publication_date) => {
    await db.query(
        `INSERT INTO news (user_id, content, publication_date) VALUES ($1, $2, $3)`,
        [user_id, content, publication_date]
    );
}

export const deleteNews = async(idNews) => {
    console.log(idNews);
    await db.query(
        `DELETE FROM news WHERE news_id = $1`,
        [idNews]
    );
}