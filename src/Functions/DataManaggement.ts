import { useEffect, useState } from "react";
import axios from "axios";


interface Post {
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

// Function to get the posts
function useFetchPosts(url: string) {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<Post[]>(url)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Error al obtener los posts");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Function to get a user by ID
function useFetchUserById(userId: number) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError("Error al obtener el usuario");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  return { data, loading, error };
}

// Function to get the comments by ID
function useFetchCommentsByPostId(postId: number) {
  const [data, setData] = useState<Comment[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setError("Error al obtener los comentarios");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);

  return { data, loading, error };
}

export { useFetchPosts, useFetchUserById, useFetchCommentsByPostId };
