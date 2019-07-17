const mongoose = require("mongoose");
const Task = mongoose.model("Task");


module.exports = {
    showAll: (req, res)  => {
        Task.find({}, (err, tasksinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", tasks: tasksinDB});
            }
        });
     
    },

    showOne: (req, res)  => {
        Task.findOne({_id: req.params.id}, (err, tasksinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", tasks: tasksinDB});
            }
        });
     
    },

    delete: function(req, res) {
        console.log('controllers')

        Task.remove({_id: req.params.id}, function(err){
            console.log('removed')
        });
        res.json('User is being deleted');
        
    },



    create: (req, res) => {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
        
    
    },

    update: function(req, res) {
        console.log(req.body);
        console.log('XXXXXXXXXXXXXXXXXX');
        console.log(req.body.tasks);
        // Task.findByIdAndUpdate({_id: req.params.id}, {$set:{ title: req.body.title, description: req.body.description}}, (err, tasksinDB) => {        

        Task.findByIdAndUpdate({_id: req.params.id}, req.body.tasks, (err, tasksinDB) => {        
            console.log("**********", req.body.tasks);
                if(err) {
                    res.json({message: "error", error:err});
                } else { // else console.log that we did well and then redirect to the root route
                    res.json({message: "Sucess", tasks :tasksinDB});
                }
                })
              }
            
        // console.log('controllers')
        // Task.findOneAndUpdate ({_id: req.params.id}, req.body)

        //     .then(data => res.json(data))
        //     .catch(err => res.json(err));
        
            
        //   }

}


    
 




