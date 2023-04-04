import { faker } from "@faker-js/faker";
import { useState } from "react";

function usePostData(){
    let [posts, setPosts] =useState(() =>{
        return generatePosts()
    })
    function generatePosts() {
        faker.seed(1234567890)
        let posts =[]
        for (let i=0; i < 10; i++) {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        posts.push({
            id: faker.datatype.uuid(),
            name: `${firstName} ${lastName}`,
            email: faker.internet.exampleEmail(firstName, lastName),

        })
        }
        return posts
    }

function deletePost(id) {
    setPosts((currentState) => {
        return currentState.filter((post) => post.id!== id)
    })
}
return [posts, deletePost]
}

export default usePostData