export const sampleChats = [
    {
        _id: "1",
        name: "John",
        avatar: ["https://i.pravatar.cc/300?img=1"],
        groupChat: false,
        members: ["1", "2"]
    },
    {
        _id: "2",
        name: "Jane",
        avatar: ["https://i.pravatar.cc/300?img=2",
        "https://i.pravatar.cc/300?img=4",
        "https://i.pravatar.cc/300?img=3",
        "https://i.pravatar.cc/300?img=3",
        ],
        groupChat: true,
        members: ["1", "2"]
    },
    

];
export const sampleUsers=[
    {
        _id: "1",
        name: "John",
        avatar: ["https://i.pravatar.cc/300?img=1"],
       
    },
    {
        _id: "2",
        name: "Jane",
        avatar: ["https://i.pravatar.cc/300?img=2"],
       
    }
]

export const sampleNotifications=[
    {
        _id: "1",
        sender:{
        name: "John",
        avatar: ["https://i.pravatar.cc/300?img=1"],
        }
       
        
    },
    {
        _id: "2",
        sender:{
            name: "Jane",
        avatar: ["https://i.pravatar.cc/300?img=2"],
        }
        
        
    }
]
export const sampleMessages=[
    {
       attachments:[
        {
            public_id:"adsxa",
            url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },
    ],
    content:"Hello World",
    _id: "xsakchn",
    sender:{
        name: "John",
        _id: "1",
    }   ,
    chat:"chatId",
    createdAt:"2022-10-10T10:10:10.000Z",    
    },
    {
       attachments:[
       
    ],
    content:"Hello World",
    _id: "xsakchsc",
    sender:{
        name: "Joames",
        _id: "2",
    }   ,
    chat:"chatId",
    createdAt:"2022-10-10T10:10:10.000Z",    
    }
   
]