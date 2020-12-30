import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://images.pexels.com/photos/889929/pexels-photo-889929.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            profileSrc="https://images.pexels.com/photos/65289/polar-bear-bear-teddy-sleep-65289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            title="Polar" />

            <Story
            image="https://images.pexels.com/photos/68767/divers-underwater-ocean-swim-68767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            profileSrc="https://images.pexels.com/photos/2786709/pexels-photo-2786709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260%22"
            title="Lily" />

            <Story
            image="https://images.pexels.com/photos/2007660/pexels-photo-2007660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            profileSrc="https://images.pexels.com/photos/3690511/pexels-photo-3690511.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            title="James" />

            <Story
            image="https://images.pexels.com/photos/21261/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
            profileSrc="https://images.pexels.com/photos/87403/cheetah-leopard-animal-big-87403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            title="Mary" />

            <Story
            image="https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            profileSrc="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            title="Kelly" />

         

        </div>
    )
}

export default StoryReel
