const { expect } = require('chai');

const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },

  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );

    let winningNumbers = 0;
    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  },

  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }

    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};

describe('Lottery', function() {
  describe('buyLotteryTicket', function() {
    it('should return the correct message when valid input is provided', function() {
      const result = lottery.buyLotteryTicket(2, 5, true);
      expect(result).to.equal('You bought 5 tickets for 10$.');
    });

    it('should throw an error when buy is false', function() {
      expect(() => {
        lottery.buyLotteryTicket(2, 5, false);
      }).to.throw('Unable to buy lottery ticket!');
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => {
        lottery.buyLotteryTicket(0, 3, true);
      }).to.throw('Invalid input!');
    });
  });

  describe('checkTicket', function() {
    it('should return the correct message when winning numbers are matched', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]);
      expect(result).to.equal('Congratulations you win, check your reward!');
    });

    it('should return the correct message when all numbers are matched', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
      expect(result).to.equal('You win the JACKPOT!!!');
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
      }).to.throw('Invalid input!');
    });
  });

  describe('secondChance', function() {
    it('should return the correct message when the ticket is a winner', function() {
      const result = lottery.secondChance(12345, [6789, 12345, 54321]);
      expect(result).to.equal('You win our second chance prize!');
    });

    it('should return the correct message when the ticket is not a winner', function() {
      const result = lottery.secondChance(98765, [6789, 12345, 54321]);
      expect(result).to.equal("Sorry, your ticket didn't win!");
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => {
        lottery.secondChance('invalid', [6789, 12345, 54321]);
      }).to.throw('Invalid input!');
    });
  });
});
