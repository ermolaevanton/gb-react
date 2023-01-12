import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './style/ArticlePage.module.css';
import { API } from '../../constants';

export function ArticlePage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getFetchArticles = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(API)
            if (res.ok) {
                const data = await res.json()
                setArticles(data)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <h1 className={styles.header}>Article Page</h1>
            <Button
                variant="contained"
                color="success"
                onClick={getFetchArticles}
            >
                Get API
            </Button>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && articles.map((article) => (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}
                    key={article.id}>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.imageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    {article.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    {article.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}