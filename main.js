let WALLET_CONNECTED = "";
let contractAddress = "{YOUR_NEW_GENERATED_CONTRACT_ADDRESS}";
let contractAbi = [
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "_candidateNames",
        "type": "string[]"
      },
      {
        "internalType": "uint256",
        "name": "_durationInMinutes",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "addCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllVotesOfCandiates",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          }
        ],
        "internalType": "struct Voting.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRemainingTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_candidateIndex",
        "type": "uint256"
      }
    ],
    "name": "getVotesOfCandiate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getVotingStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_candidateIndex",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "votingEnd",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "votingStart",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const connectMetamask = async (section) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  WALLET_CONNECTED = await signer.getAddress();
  var element = document.getElementById(`metamasknotification${section}`);
  element.innerHTML = "Metamask ID is connected.";
}

const voteStatus = async () => {
  if (WALLET_CONNECTED != 0) {
    var status = document.getElementById("status");
    var remainingTime = document.getElementById("time");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    const currentStatus = await contractInstance.getVotingStatus();
    const time = await contractInstance.getRemainingTime();
    console.log(time);
    remainingTime.style.display = 'block';
    status.innerHTML = currentStatus == 1 ? "Voting is currently open. " : "Voting is finished. ";
    remainingTime.innerHTML = `Remaining time is ${parseInt(time, 16)} seconds`;
  }
  else {
    var status = document.getElementById("status");
    status.innerHTML = "Please connect your MetaMask ID first. ";
  }
}

const addVote = async () => {
  if (WALLET_CONNECTED != 0) {
    var name = document.getElementById("vote");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    const currentStatus = await contractInstance.getVotingStatus();
    var cand = document.getElementById("cand");
    if (currentStatus == 1) {
      cand.innerHTML = "Please wait... ";
      const tx = await contractInstance.vote(name.value);
      await tx.wait();
      cand.innerHTML = "Your vote has been recorded. ";
    }
    else {
      cand.innerHTML = "Cannot Vote. Voting has ended."
    }
  }
  else {
    var cand = document.getElementById("cand");
    cand.innerHTML = "Please connect your MetaMask ID first. ";
  }
}

const getAllCandidates = async () => {
  if (WALLET_CONNECTED != 0) {
    var tbody = document.querySelector("#myTable tbody");
    tbody.innerHTML = "";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    var candidates = await contractInstance.getAllVotesOfCandiates();
    console.log(candidates);
    var table = document.getElementById("myTable");
    table.style.display = 'block';
    var dummy = document.getElementById("dummy");
    dummy.style.display = 'inline';
    for (let i = 0; i < candidates.length; i++) {
      var row = tbody.insertRow();
      var idCell = row.insertCell();
      var descCell = row.insertCell();
      var statusCell = row.insertCell();
      idCell.innerHTML = i;
      descCell.innerHTML = candidates[i].name;
      statusCell.innerHTML = candidates[i].voteCount;
    }
  }
  else {
    var p3 = document.getElementById("p3");
    p3.innerHTML = "Please connect your MetaMask ID first.";
  }
}

const getWinner = async () => {
  if (WALLET_CONNECTED != 0) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    const currentStatus = await contractInstance.getVotingStatus();
    const candidates = await contractInstance.getAllVotesOfCandiates();
    let winner = { name: "", voteCount: 0 };
    for (const candidate of candidates) {
      if (candidate.voteCount > winner.voteCount) {
        winner = candidate;
      }
    }
    var p4 = document.getElementById("p4");
    p4.style.display = 'none';
    var table = document.getElementById("myTable");
    table.style.display = 'none';
    var dummy = document.getElementById("dummy");
    dummy.style.display = 'none';
    const winnerParagraph = document.getElementById("winner");
    if (winner.name !== "" && currentStatus == 0) {
      winnerParagraph.innerHTML = `The winner is: ${winner.name}`;
    }
    else if (winner.name !== "" && currentStatus == 1) {
      winnerParagraph.innerHTML = "Voting is still open. Cannot determine the winner yet.";
    }
    else {
      winnerParagraph.innerHTML = "No winner determined yet.";
    }
  } else {
    var p4 = document.getElementById("p4");
    p4.innerHTML = "Please connect your MetaMask ID first.";
  }
}
