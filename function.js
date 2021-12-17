const clickEnter = document.getElementById('btnSubmit');
        clickEnter.addEventListener('click', function(){
            var login = document.getElementById('login-page');
            login.style.display = 'none';
            var dashboard = document.getElementById('dashboard');
            dashboard.style.display = 'block';
            // document.getElementById('email').value = '';

        })


        // Deposit Section JS

        const addingDeposit = document.getElementById('btnDeposit');
        addingDeposit.addEventListener('click', function(){

            const getInputNumber = inputAmount('deposit-amount');

            addAmount('deposit-dollar', getInputNumber);
            addAmount('balance', getInputNumber);

            document.getElementById('deposit-amount').value = '';

        })

        // Withdraw Section JS 

        const doingWithdraw = document.getElementById('btnWithdraw');
        doingWithdraw.addEventListener('click', function(){
            const getInputNumber = inputAmount('withdraw-amount');
            addAmount('withdraw-dollar', getInputNumber);
            addAmount('balance', -1 * getInputNumber);

            document.getElementById('withdraw-amount').value = '';
        })


        // Getting Input Function 

        function inputAmount(id){
                const inputMoney = document.getElementById(id).value;
                const inputMoneyNumber = parseFloat(inputMoney);
                return inputMoneyNumber;
            }

            // Addning Amount Function 
        function addAmount(id, getInputNumber){
                const current = document.getElementById(id).innerText;
                const currentNum = parseFloat(current);
                const totalAmountAdd = currentNum + getInputNumber;
                document.getElementById(id).innerText = totalAmountAdd;
            }