import React, { useState, useEffect } from 'react';
import './Postdetails.css';
import ProfileDetails from '../Mypost/ProfileDetails/ProfileDetails';
import { assets, numberOfAssets } from '../../assets/postimg/postimg';

export default function Postdetails() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setPosts(Object.values(assets));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {numberOfAssets !== 0 && (
                <>
                    {posts.map((post, index) => (
                        <div key={index} className="postdetails-container">
                            <ProfileDetails media={post.media} Medialink={post.links} />
                            <div className="post">
                                <img src={post.image} className='postimage' alt="" />
                                <div className="post-details-description">
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}
