import { useState } from "react"

export default function App(){
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

    setComments(state => [newComment, ...state])
    setAuthor("")
    setContent("")
  }

  return(
    <div className="container">
      <h1 className="h1">Seção de comentários</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"required value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor="comentario">Comentário</label>
        <textarea name="" id="comentario" cols="30" rows="10" required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button id="botao" type="submit">Enviar comentário</button>
        <hr />
        <article id="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (
            <p>Seja o primeiro a comentar!</p>
          )}
        </article>
        
      </form>
    </div>
  )
}