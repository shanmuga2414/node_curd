const Employee = require('../models/Employee');

const employeeController = {};

employeeController.list = (req, res) => {
  Employee.find({}).exec((err, employees) => {
    if (err) { console.log('Error:', err); } else {
      res.render('../views/employee/index', { employees });
    }
  });
};

employeeController.create = (req, res) => {
  res.render('../views/employee/create.ejs');
};

employeeController.show = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) { console.log('Error:', err); } else {
      res.render('../views/employee/show', { employee });
    }
  });
};


employeeController.save = (req, res) => {
  const employee = new Employee(req.body);
  employee.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully created an Employee');
      // res.send('Successfully created an Employee');
      res.redirect(`/employees/show/${employee._id}`);
    }
  });
};

employeeController.delete = (req, res) => {
  Employee.remove({ _id: req.params.id }).exec((err) => {
    if (err) { console.log('Error:', err); } else {
      console.log('Employee Deleted');
      res.redirect('/employees');
    }
  });
};

employeeController.edit = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) { console.log('Error:', err); } else {
      res.render('../views/employee/edit', { employee });
    }
  });
};
employeeController.update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: { username: req.body.username, address: req.body.address, position: req.body.position, salary: req.body.salary } }, { new: true }, (err, employee) => {
    if (err) { console.log('Error:', err); } else {
      res.redirect('/employees');
    }
  });
};

module.exports = employeeController;
