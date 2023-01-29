# Mortgage-Calculator

This calculator is built using the below frameworks:

1. Angular 10
2. SCSS
3. HTML5
4. Bootstrap 4
5. Angular Material 10
6. Jasmine - Unit Testing

The tools used:
Visual Studio Code : Workspace
GIThub : version control

Steps to Install Node Modules for the Mortgage-Calculator App:

# npm install

Once the node-modules are installed start the application using the below command

# npm run start

Features implemented:

1. This application shows the summary of Mortgage calculations with the provided payment plan details.
2. Formula used to calculate Mortgage payment  = P*((i + (1+i)^n)/(1+i)^n - 1)
    where P is principal amount, i is interest per payment cycle and n is number of payments.
3. Principal payments was calculated using the constant Principal per payment method.

Features to be implemented:

1. Prepayment details has to be incorporated into the calculation.
2. All types of validations has to be done on the form input fields.
3. Mortgage summary in readable format.
4. Payment Diagram with graphs and charts.
5. Ability to download the report.