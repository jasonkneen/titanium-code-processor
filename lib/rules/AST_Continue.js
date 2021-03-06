/**
 * <p>Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.</p>
 *
 * The continue statement is used to skip the rest of a loop and continue with the next iteration
 *
 * @module rules/AST_Continue
 * @see ECMA-262 Spec Chapter 12.7
 */

/**
 * @event module:rules/AST_Continue.rule
 * @property {string} ruleName The string 'AST_Continue'
 * @property {module:AST.node} ast The AST node that is an instance of this rule
 * @property {string} file The file that the rule begins on.
 * @property {number} line The line of the file where the rule begins on.
 * @property {number} column The column of the file where the rule begins on.
 * @property {boolean} processingComplete Indicates whether the rule has been processed yet or not. This can be used to
 *		determine if this is the pre-evalutation event or the post-evaluation event.
 * @property {Array} result The result of evaluating the continue. The result is a return tuple consisting of
 *		['continue', label if supplied or undefined, undefined]. Only available post-evaluation.
 */

var AST = require('../AST'),
	RuleProcessor = require('../RuleProcessor');

AST.registerRuleProcessor('AST_Continue', function processRule() {

	var result = ['continue', undefined, this.label ? this.label.name : undefined];

	RuleProcessor.preProcess(this);

	RuleProcessor.fireRuleEvent(this, {}, false);
	RuleProcessor.logRule('AST_Continue', result[2]);

	RuleProcessor.fireRuleEvent(this, {
		result: result
	}, true);

	RuleProcessor.postProcess(this, result);

	return result;
});