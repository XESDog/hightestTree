(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"source_atlas_", frames: [[0,1992,3686,1990],[0,0,3686,1990],[0,6259,349,369],[1193,6259,262,251],[656,6259,270,275],[928,6259,263,259],[351,6259,303,311],[1457,6259,256,252],[1193,6512,163,166],[0,3984,2273,2273],[202,6630,70,70],[0,6630,200,80]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bm_23 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bm_24 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bm_25 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bm_26 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bm_27 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bm_28 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bm_29 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bm_30 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bm_31 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bm_32 = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.submit = function() {
	this.spriteSheet = ss["source_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.submitBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.submit();
	this.instance.parent = this;
	this.instance.setTransform(-100,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-110,y:-44},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-40,200,80);


(lib.soundEffect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("effect");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.graph_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1843,-995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1843,-995,3686,1990);


(lib.graph_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_31();
	this.instance.parent = this;
	this.instance.setTransform(-1136.5,-1136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1136.5,-1136.5,2273,2273);


(lib.graph_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6245").s().p("AB7HqQl7gZkYjEQkZjJhAlnQgKgzgDgwQgCg2AHgvQADAYAFAaQBAFoEZDIQEYDEF7AZQF5AWDejlQCTiWAWjNQAeEtjHDMQjKDRlKAAQghAAgigCg");
	this.shape.setTransform(15.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74593C").s().p("AB7LJQl7gZkZjEQkZjJhAlnQgFgagDgYQAdjNDDhjIArgWQEGiCEHhnQEZh1E9EEQE7EKBCFZQAGAlAEAkQgWDNiTCXQjKDRlLAAQghAAghgCg");
	this.shape_1.setTransform(15.7,-26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#937455").s().p("ACNO0QmogNk7jmQhrhNhQhnQgegogagpQhPiBgqifQgOg2gKg5Qg8leDIi7QAtgrA6giQE7izE8iWQE8iVFiEvQAWASAWAWQBHBBA6BHQCECgBEC7QAIAUAHAWQATBlAZBeQAFAdACAeQAfFgjaD5QjqEQmHAAIgsAAgAhVsaQkGBokHCCIgqAVQjDBjgdDNQgHAwACA2QADAwAKAzQBAFnEZDIQEYDEF7AZQF5AXDejlQDHjNgekuQgDgigHglQhClbk6kKQjbizjKAAQhbAAhXAkg");
	this.shape_2.setTransform(14.3,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#937455").s().p("Am9IJQiThlAgjfQAejcC7jWQC7jVDYhRQDYhSCfA+QCdA/geD1QgdDyi6DmQi6DqjlBQQhlAjhVAAQhtAAhSg5gAB2nyQi9BtiYCyQiUCwgVC2QgTC3B7BSQB7BSC/hDQDBhDCXivQCUiwAUi4QATi4h7h8QhBhChWAAQhLAAhaAzg");
	this.shape_3.setTransform(270.9,229.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6245").s().p("AlMGlQhxhKASioQARipCLijQCJiiCxhjQCwhmBxBzQBzBygTCqQgSCniLCjQiJCiivA9QhPAbhDAAQhSAAg/gqg");
	this.shape_4.setTransform(278,225.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C7E60").s().p("AlpHLQh6hTATi3QAUi3CViuQCYizC8hsQDBhvB8B+QB7B8gUC3QgUC4iUCwQiWCwjABDQhXAehIAAQhZAAhEgtgAApmeQixBkiJCiQiLCjgRCpQgSCnBxBLQBxBLCyg9QCvg8CJiiQCLijASioQATiqhzhyQg8g8hOAAQhEAAhTAvg");
	this.shape_5.setTransform(278.2,225.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C7E60").s().p("AC/KXQktiMkdiXQkfiZhNk8QgMg4gHg1QgPiNAphuQAIgUAKgUQAFgMAIgMQAmgrAfgtQAMgNAPgLQChiDERA6QE2BAEOEOQESEPBZENIAKAdQAUBMABBGQgBAfgEAdQgMBOgpBDQgZAmggAjQhiBoiMAAQhrAAiEg+gApmoTQhiBtAJCuQADBGAVBPQBIEYD3COQD2CNEDCFQEFCECOicQA8hBAVhPQAchvgviKQhTjwjuj1Qjuj2kIhCQhQgUhFAAQieAAheBqg");
	this.shape_6.setTransform(-199.7,276.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E6245").s().p("AC2GJQkCiFj2iNQj3iNhIkZQgWhQgChFQASAtAbAxQBBB7CjCNQCgCHDDBqQHKD5DFiFQAZgRAXgWQgUBQg8BBQhNBUhwAAQhfAAh4g8g");
	this.shape_7.setTransform(-203.4,296.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#937455").s().p("AKzJAQADgcABgfQAAhGgVhNIgKgdQhZkOkRkNQkPkPk1hAQkRg5ihCDQgPALgMAMQggAtgmAsQgHAMgGAMQgKATgHAUQgqBuAQCNQhEoJGJiCQANgGAPgEQNYi0IIQpQAJAUgCAWQAmEWkQDSQAqhDAMhOgAijINQjChqigiIQijiNhCh7QgagwgTgtQgJivBihtQCIiYEKBDQEJBCDsD1QDvD1BSDwQAvCLgcBuQgXAWgZARQhEAuhlAAQi8AAkriig");
	this.shape_8.setTransform(-190.9,259);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#937455").s().p("AlKJAQjviChEj/QhEj9CijxQCfjyEghRQEhhTDFCVQDFCXA2DxQA5DviHDvQiGDukFBOQhkAfhfAAQidAAiShRgAimpLQjdA8h0C+QhxDBA5DUQA4DVDDBuQDFBtDag6QDbg8B0i/QBzjBgBjbQgCjfj6hlQieg/iSAAQhVAAhRAVg");
	this.shape_9.setTransform(-145.4,-274.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C7E60").s().p("AkoHQQjDhtg4jVQg5jUBxjBQB0i+Ddg8QDcg7D6BlQD6BkACDfQABDahzDDQh0C+jbA8QhMAVhJAAQiKAAiAhIgAiMnWQjKA2hqCyQhqCwA1DCQA1DEC0BlQCzBlDIg2QDLg2BriyQBqiwgDjLQAAjLjnhdQiRg7iHAAQhOAAhLAUg");
	this.shape_10.setTransform(-146.6,-281.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E6245").s().p("AkOGrQi0hlg1jEQg1jCBqivQBqizDKg1QDLg4DmBfQDnBcAADLQADDMhqCvQhrCzjLA2QhGAShCAAQh+AAh1hCg");
	this.shape_11.setTransform(-146.4,-281.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#937455").s().p("AmQPcQBtgFBhgxQAfgQAfgUQBRg3BFhWQDQj9BdmYQBemTiFkuQhykJjkgxQgTgFgUgBQhBADhDgDQgQABgOAEQi9Aji2CwQAHgKAIgKQD0k5FBgsQFBgsDRErQDQErhBIgQhBIikaEPQkcEQiNAAQiNAAhqhtg");
	this.shape_12.setTransform(-322.3,-38.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E6245").s().p("AjMNUQgigCgfgIQi1gzgekDIgFguQgekagNkUQgSkqDjj5QDnj1DnANQDqAQBkEJQBlEJhZFmQhbFqi0DjQipDTjbAAIgigBg");
	this.shape_13.setTransform(-352.1,-38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C7E60").s().p("AjKO9QkfgYg2laQgylYghlRQgflUEGkSQAQgSASgQQC2iwC7gjQAPgEAQgBQBDADBBgDQATABATAFQDlAxByEJQCFEuheGTQhcGYjQD9QhGBWhRA3QgfAUgfAQQhgAxhtAFIgZAAQgZAAgZgCgAlZqFQjjD5ASEqQANEUAeEaIAFAuQAeEDC1AzQAfAIAiACQDwARC2jjQC0jjBblqQBZlmhlkJQhkkJjqgQIgYgBQjbAAjbDpg");
	this.shape_14.setTransform(-349.5,-35.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E6245").s().p("AElKvQCTjbkVn+Qh2jXiWiyQidi2iIhJQg2gdgzgVQBOAEBYAXQE4BRCdESQCdERCUEgQCTEiiuCfQhIBChZAXQAYgZAUgdg");
	this.shape_15.setTransform(334.9,-175.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#74593C").s().p("AENLKQkLhbkQkJQkRkIhJkmQhLknCpiXQB6htDCAJQAyAVA3AdQCHBJCdC2QCXCyB2DYQEVH+iUDbQgTAcgYAaQguALgyAAQhUAAhhghg");
	this.shape_16.setTransform(305.2,-175.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#937455").s().p("AChPJQgZACgWgKQygpCDIu4QAFgRAHgOQCPm1JFBLQA6AIA/ANQFgBWCqE/QCnE8CcFPQCdFSjMDAQgnAlgqAbQjNEJkIAAQglAAglgFgAnwsMQipCXBKEoQBJEmEREHQEQEJELBcQCbA0B6gfQBZgXBIhCQCuifiTkiQiUkgidkRQiekSk3hRQhYgXhOgEIgegBQiuAAhvBkg");
	this.shape_17.setTransform(302.7,-161.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#937455").s().p("EASgAvDQhxhwAAidQAAieBxhwQBwhvCeAAQCdAABwBvQBvBwAACeQAACdhvBwQhwBxidAAQieAAhwhxgArxbZQiKhEAAhhQAAhiCKhGQCKhEDDAAQDDAACKBEQCIBGABBiQgBBhiIBEQiKBGjDAAQjDAAiKhGgEg0CARsQh3hHAAhmQAAhnB3hJQB2hHCoAAQCnAAB2BHQB4BJAABnQAABmh4BHQh2BKinAAQioAAh2hKgEAu/ANmQhKgqgBg9QABg8BKgsQBNgqBrAAQBrAABLAqQBMAsABA8QgBA9hMAqQhLArhrAAQhrAAhNgrgAZRBuQiZhLAAhrQAAhqCZhNQCZhLDYAAQDYAACZBLQCYBNAABqQAABriYBLQiZBLjYAAQjYAAiZhLgA9BotQgxgYgageQjbgSiiiDQi2iUAAjVQAAjUC2iWQC6iTEEAAQEEAAC3CTQC6CWAADUQgBCehkB5IAOAHQBvA7AABRQAABRhvA5QhuA6icAAQibAAhvg6gEAKPgqiQibhEAAhhQAAhiCbhGQCZhEDcAAQDbAACaBEQCbBGgBBiQABBhibBEQiaBGjbAAQjcAAiZhGg");
	this.shape_18.setTransform(-183.8,-102.2,1,1,0,0,0,-186.8,-112.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C7E60").s().p("EgAdA7qQ8ggQvww3Qvyw3gu4jQgu4jRCxOQRBxRbVhoQbUhoRRSCQRRSCgDZZQgFZYwlRIQwWQ374AAIg1gBg");
	this.shape_19.setTransform(6.7,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#937455").s().p("AFNJBQkUAAkkipQkjipiLjvQiKjtBiipQBiiqETABQEVgCEkCpQEkCpCJDwQCKDvhhCoQhiCpkSAAIgCAAg");
	this.shape_20.setTransform(203.8,-299,1,1,0,0,0,-0.2,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#937455").s().p("AinMpIk5hoQkhhjB5kpIF4uWQB4ktEeBiIE6BnQEhBihAEYQh7IokRG1QhvCzi0AAQhHAAhSgcg");
	this.shape_21.setTransform(344.3,155.6,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.5,-381.8,825.1,763.7);


(lib.graph_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_26();
	this.instance.parent = this;
	this.instance.setTransform(-135,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-138,270,275);


(lib.graph_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_28();
	this.instance.parent = this;
	this.instance.setTransform(-151,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-156,303,311);


(lib.graph_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_27();
	this.instance.parent = this;
	this.instance.setTransform(-131,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-129,263,259);


(lib.graph_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_29();
	this.instance.parent = this;
	this.instance.setTransform(-128,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-126,256,252);


(lib.graph_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4EAFF").s().p("AiVRBIipgxQjuhDiahlQg7gngwgsQitjSBNkLQAmiEBDh2QAcgyAigvQByg3AwgZQgiAvgdAyQhEB1glCEQhNEMCtDSQAvAsA8AnQCaBlDuBCICoAxQFkBkEPheQgmAdgvAUQijBNjEAAQihAAi2gzgAxKkyQEWihGGjSICABGIqLFzIB1D7IgtAbgAoIvSIhzDtIjRhAICjlOQNuD3OGFWIgqBVQsdkmsMjbg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C4FF").s().p("AgnPIIipgxQjuhDibhkQg7gngvgsQitjTBNkLQAliEBEh1QAcgyAigwQgvAahyA3IhaAzIh2j8IKMlzIiAhHQhoghhlgfIBzjsQMLDbMeEmIh6D3QmziamCh+IgEgBQjOBqjMBxIApAkQCEAOCHAfQBFAQBGAUQDIA5CfBEQCNBMB0CTIATAYQB3DGhKEFIgZBgQgwCjh1BXQiDAtiXAAQihAAi2gzgAmVBnQhVBiguB6QgqCSBKBFQAwAtBFAhQAyAYA9ASIBcAaQEQBMCIg1QBmgmAbheQAehsgdhRQgOglgZgfQhPhikJhVQh7gjijAAQgsAAguADg");
	this.shape_1.setTransform(5.1,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37488E").s().p("AisSSIipgxIgBgBQlghii1irIgHgIQjKj0Bak3QAahbAnhWQgOgJgKgQIjZlcQgMgUgBgXQAAgXALgUQAMgVAUgLQD+iTDviCQhwgjhtggQgYgHgQgTQgRgTgDgZQgDgZALgXICklOQANgcAcgMQAcgNAdAJQNyD3OJFXQAWAIAPAUQAPATACAYQADAYgLAVIijFNQgPAdgdAMQgfAMgegKQmiiUlzh6QhkA0hhA1QB7AWB+AlQDOA6CjBHIAHADQCpBaCHC1IAFAHQCKDhhTErIgaBgIgBACQhKD9jbBiQizBWjXAAQitAAjDg3gAD0KcIABAAQA8gXASg2IAAABQAehug1hGIAAgBQhIhRjohKIADABQiDgli0AGQg6BLgjBZQgXBUAgApIABABQBIBBB5AkIABAAIBbAZIAAAAQDsBDB2gpg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091131").s().p("AjOUMIgBgBIipgxIgCAAQmDhtjFi+IgSgUIgBgBQjyklBql0IABgEQARg/AYg8IjLlFQgfgygBg6QgBg6AdgyQAcgzAygdIAAABQB7hIB4hDQgYgQgTgWIgBgBQgpgwgIg+QgJhAAeg6IgBACICklOIgBAAQAhhGBJgfIgCABQBGggBLAVIgBAAQN2D5OPFZQA4AVAlAxIABAAQAjAvAHA7QAGA8gbA3IikFNQgkBHhJAfIAAAAQhKAdhJgYQArAuAoA3IAFAGIABACIAFAIQCoENhjFkIAAgBIgZBgIgEAKQhbEykLB2QjKBjjzAAQi/AAjXg8g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-135.2,262.2,270.5);


(lib.graph_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFF0FF").s().p("AgwBSQAEgFBWglQBXgkAKBIQgDAfgzAAQgvAAhWgZgAiFgvQgTg2AtgFQAkAFgnBvQgDgDgUg2g");
	this.shape.setTransform(-190,-4.6,0.847,0.847,0,0,0,18.4,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFF0FF").s().p("AEJCgQACgGBLg5QBLg6AcBDQAKA3ijAAIgbgBgAjUALQh7hoA0hAQA6ghCSE1QgIgCh9hqgAmQgSQg6gIARgqQAUgeBSBWIgDAAQgKAAgwgGg");
	this.shape_1.setTransform(49.6,69.5,0.847,0.847,0,0,0,35.6,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFF0FF").s().p("AAbGyQiTi/jBiTQi7iNjZhXQihhBiqgaQjgggjiAcQi7AWi1BAQiSA1iIBKQBYhlByhHQCuhsDKgrQDxgxD1AiQDPAgDABQQCWA+CHBXQCxBwCUCXQByB0BcCJQBLBuA6B4IAUAqQFypeIlm8QJKndLhAFQmhB5l8DUQtwHqpJM7IgBABQhfjTiNi1gEgnYgF+IgFgTQEgAOAjEZQAHA3gcAyQhFj8jkiBg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#091131").s().p("ADyNeQgMgHgGgMQgcg/ggg8QgGAKgKAGQgQAIgQgFQgKAAh1hkQgXgUgSgTIgEAJQgHALgNAFQgFAGhDgIQgugGgOgWQgagaASgtQABgEADgEQAQgYAdgBQAQgBAXAMQAMAGAQANQgMgvAkglQAFgFAHgEQALgKAOgCQiFiginh/IABAAQi3iKjUhVQicg+ilgaIAAAAQjbggjcAcQi3AViwA/IABAAIhEAaQARASAFAjIAAAKQACA8hUADQgsAChWgZQgJgDgGgFIgFACQgOAHgOgDQgPgDgKgMIAAgBIgFAJQgIAPgRAFQgRAEgPgIQgPgJgFgQQhAjrjVh5QgPgIgEgRIgFgSQgEgNAFgNQAEgMAMgIQALgIAOABQEOANBIDhQAMgGARgCIALAAQA0AAgCBFIgBAOQA6gzBCgpQC1hwDQgsIAAAAQD5gzD7AkIABAAQDUAgDFBSQCZBACKBYQC1B0CYCZQB1B3BeCMQBDBlA4BtQFro8IMmpQJXnmLvAFQAQAAALALQAMAKACAPQACAQgIANQgIANgPAEQmeB3l4DSQsFGvogK2IAdgWQAwgmAjAHQAsABAYA3IADAIQARA8hQAYQgqANhagCQgNAAgLgIQgKgJgFgMIgBgIQgpA2goA4IgEAGIgCABQgKAKgOACIgFABQgLAAgKgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.8,-86.8,513.6,173.6);


(lib.graph_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_30();
	this.instance.parent = this;
	this.instance.setTransform(-81,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-83,163,166);


(lib.graph_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_25();
	this.instance.parent = this;
	this.instance.setTransform(-131,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-126,262,251);


(lib.graph_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bm_24();
	this.instance.parent = this;
	this.instance.setTransform(-175,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-184,349,369);


(lib.graph_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#200D01").s().p("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");
	this.shape.setTransform(-10.4,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0CD89").s().p("Ak1DoQAShWAehKIDbCeQgEBCAFBIQhfgPith5gAjQgkQCfkMFmg/QkRC+g9Eag");
	this.shape_1.setTransform(-282.9,-91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9B142").s().p("AlvAqQBHAFBDgDICdDaQhKAehVARQh5isgPhfgAhoAbQEag+C+kRQg/FlkNCgg");
	this.shape_2.setTransform(265.8,108.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEA12A").s().p("Egj/AUKQmiAAknkoQkgkggHmUUAdTgUyA6WgEFIAFABQF3AIGPAWQAxA6AnA+IAGAKIAEAGQAuBNAfBUQAIAVAHAXQAmB5AGCHIABAqIAAAKIAAArIAAAKIAANaQgHGUkgEgQkoEomhAAg");
	this.shape_3.setTransform(0,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5B352").s().p("Egx5AAwQAAgdABgcQAGh3AfhuQALgnAPglIALgcQAKgYAMgYQAVgtAbgqQA+hjBXhYQEoknGhAAMBH/AAAQGiAAEnEnQAgAfAcAhQmPgWl2gIIgGgBUg6VAEFgdTAUyg");
	this.shape_4.setTransform(-11.8,-49.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#693712").s().p("Egj/AYmQnLAAlFlFQk9k9gHm8IAAu5QAAgfACgfIAAAAQAGiDAjh5IAAABQAMgsAQgqIAAABIAMgeQALgbANgbIABgBIABgCQAXgwAdguIAAgBQBDhrBghgIAAAAQFFlFHLAAMBH/AAAQHLAAFFFFQBeBeBEBrIAEAIIAFAGIACAEQAzBVAiBdIAAgBQAJAXAHAaQAqCFAHCUIABAwIAAAJIAAAsIAAAJIAAOEQgHG8k9E9QlFFFnLAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.2,-157.4,682.3,314.8);


(lib.btn_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFFF4").s().p("AA4CeQggAYgkAXIgegkIguAbIgnhEQgjA/gzAvQgSgqgRgdQAxgvAfg9QgrhGgng+IA4ggIA4BUQAOg0AEg9Ih4AAIAAhAIC6AAIAAA+QAAAQgKA8QgKA6gSA0IAzBTQAogYAhgYIAAgBIgEgSQgLg5gEhDIg7AHIgGg/IA+gHQgChCAAg7IBIAAQgBA7ADA7ICbgRIAGA+IieARQADA5AHAqQAxgtAggyIA7AoQgnA2g1A0IgcAaQAKAdANAQQAMAQAKAAQATAAALhXIAAgEIAEAEQAdASAcANQgNBGgRAfQgRAggjAAQhHAAgqhagABmjLIAqgrQAtAcAkAhIgvAuQgbgbgxglg");
	this.shape.setTransform(85.1,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFFF4").s().p("AiUCuQASgdAIgjQAJgiAEgkQADgkABhrIgfAAIAAhBIBGAAQgLgbgTghIA7gXQAbAvAKAYIgZAMIBKAAQAUgmAOgtIBBAMQgIAXgJAWIB5AAIAAA8IiUAAQgLAUgLASICXAAIAAA4IgxA4IAAANIBFAAIAAA8IhFAAIAABTQAAAjgLAOQgMAPgTAEQgTAEg6AAQgEgcgJglIAuACQAXAAAAgaIAAhCIhJAAIAAg8IBJAAIAAgbIAhgpIhbAAIAAgkQgGgKgMgSIheAAIAAA2IBZAAQgCC5gEAnQgFAngSAPQgRAOg2AAQgHgngHgeIAgACQARAAADgPQADgOACiIIghAAQgFCag7BXQgQgugSgggAj4DgQAXhTAWhuQAhANAeAKIgtC+Ig/gUgAj8hAIAngtQApAeAlAgIgvA0QgogpgegcgAjvjIIApgwQAlAdAkAeIgvAzQgfghgkgdg");
	this.shape_1.setTransform(27.8,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFFF4").s().p("AgbD2IAAhgIgwAzIgpgpQgiAwg1AlQgXgegWgZQAyggAhgsQgkghgjgdQARg8AOhOIgnAAIAAg+IAxAAQAHgtAFgzIBCAHIgOBZIBYAAQAAAggCAdQAtgwA0huIBJAVQguBKgxA+IB1gIQgSglgSghIA1gVQArBGAqBWIg8AZIgRgmQiUAKgzAJIgTguQgJBsgcBCIA4AsIAAiIID1AAIAADpIhCAAIAAgcIhyAAIAAAegAAmCZIByAAIAAhQIhyAAgAioAkIAhAaQAYg9AFhXIgkAAQgMBAgOA6g");
	this.shape_2.setTransform(-29.4,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFFF4").s().p("AjzC1QAugZAegiQAegiAFhFIhwAAIAAhAIBzAAIAAh5IhYAAIAAhAIG5AAIAABAIhQAAIAAB5IBlAAIAABAIhlAAIAADKIhHAAIAAjKIiEAAQgFBagdAtQgcAtg8AgQgbgYgjgagAg5gtICCAAIAAh5IiCAAg");
	this.shape_3.setTransform(-85.7,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8A3C").s().p("AiFDKQgMgBgJgJQgJgJAAgNIABgPQABgMAJgIQAKgHAMACQAMABAJALQAIAKgBAMIgBALQAAAMgIAIQgIAHgLAAIgDAAgAh8BUQgNgEgGgLQgGgLADgMQA1jPDbgoQAMgCALAHQALAHADAMQADANgGAKQgHAKgMACQi4AigtCtQgDAMgLAGQgGACgGAAQgFAAgFgBg");
	this.shape_4.setTransform(-118.9,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7920").s().p("AwADhQirAAh4h4Qh4h3AAiqQAAgUACgUQANCRBpBoQB4B4CrAAMAgBAAAQCrAAB4h4QBphoANiRQABAUABAUQAACqh4B3Qh4B4irAAg");
	this.shape_5.setTransform(0,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AwAGaQirAAh4h4QhphpgNiRQgCgTAAgVQAAipB4h4QB4h4CrAAMAgBAAAQCrAAB4B4QB4B4AACpQgBAVgBATQgNCRhpBpQh4B4irAAg");
	this.shape_6.setTransform(0,-7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B2C15").s().p("AwAHCQirAAh4h4Qh4h4AAiqQAAgVACgTQgCgTAAgUQAAiqB4h4QB4h4CrAAMAgBAAAQCrAAB4B4QB4B4AACqQgBAUgBATQABATABAVQAACqh4B4Qh4B4irAAg");
	this.shape_7.setTransform(0,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-48.5,287.1,97);


(lib.btn_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bm_32();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-38,y:-38},0).wait(2).to({scaleX:1,scaleY:1,x:-35,y:-35},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.btn_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F2F54").s().p("AimETIAAhkQAuAeA+AAQCKAAADi1IgCgBQgmA7hOAAQhHAAgvgzQgugxAAhMQAAhaA4g4QA3g4BZAAQBdAAA1BHQA1BHAAB+QAACWhABXQhABYh3AAQhEAAgzgWgAg7ivQgWAcAAAqQAAAuAWAaQAWAZAlAAQAiAAAXgYQAVgZAAglQAAgsgVghQgXghgkAAQgkAAgVAdg");
	this.shape.setTransform(0.5,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2F7FF").s().p("Ag3GWQgJgIAAgMQAAgLAJgIQAHgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgHgIgADyF2QgFgEABgGQgBgGAFgEQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFgAkSEnQgIgHABgKQgBgKAIgHQAGgGAKAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgGgHgAGbELQgFgGAAgHQAAgIAFgGQAGgFAHAAQAJAAAFAFQAGAGgBAIQABAHgGAGQgFAFgJAAQgHAAgGgFgAHqDGQgEgEgBgHQABgHAEgFQAFgFAHAAQAHAAAEAFQAFAFAAAHQAAAHgFAEQgEAFgHAAQgHAAgFgFgAnIC1QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgADGCgQgFgFAAgJQAAgIAFgGQAGgGAJAAQAIAAAFAGQAHAGgBAIQABAJgHAFQgFAGgIAAQgJAAgGgGgAHvAzQgEgEAAgHQAAgHAEgGQAGgFAHAAQAHAAAFAFQAFAGAAAHQAAAHgFAEQgFAGgHAAQgHAAgGgGgAlSApQgDgDAAgFQAAgFADgDQADgDAFAAQAGAAACADQAEADAAAFQAAAFgEADQgCAEgGAAQgFAAgDgEgAHWhBQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgAoHhIQgFgFAAgJQAAgIAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAIQAAAJgFAFQgGAGgJAAQgIAAgGgGgAoAi/QgCgDAAgFQAAgFACgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgAH0jqQgEgEgBgGQABgGAEgFQAFgEAGAAQAFAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgFAAQgGAAgFgFgAnTkYQgDgDABgFQgBgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgEAAgEgEgAkWlDQgEgDABgFQgBgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAgZlfQgEgEAAgHQAAgHAEgFQAGgEAHAAQAHAAAEAEQADAFAAAHQAAAHgDAEQgEAFgHAAQgHAAgGgFgACjl/QgFgFAAgHQAAgHAFgGQAFgFAIAAQAHAAAEAFQAGAGAAAHQAAAHgGAFQgEAFgHAAQgIAAgFgFg");
	this.shape_1.setTransform(4.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37657A").s().p("AnqhUIPegqIB1DlIzRAYg");
	this.shape_2.setTransform(1.5,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#497990").s().p("ArpAuICNiHICFA+Ih+DTgAIHhFIBehyICFCFIhuDSg");
	this.shape_3.setTransform(-0.4,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82C9E3").s().p("AhcpFIABAAIC4CdIgtNnIiMCHg");
	this.shape_4.setTransform(-65.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#65E4FF").s().p("AiYhoIEGgFIAqDXIi2AEg");
	this.shape_5.setTransform(-21.7,-63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFF0FF").s().p("Ao3kmIAwg5IPihPIBkBbQj4BfjVB4IjSj3IjQAUIEME+IgyAhIkQlBIiEAWIE9FoQjjCmiuDMg");
	this.shape_6.setTransform(5,-7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AEEBFD").s().p("ApAFcQCujMDjilIF4GtIB8AAImdnqIAygiIHBITIB8iDImnnrQDVh4D4hfIAEADIgbLJIh3B5IuAAJg");
	this.shape_7.setTransform(5.2,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEF7FF").s().p("AkuiQICEgWIEPFBQgsAegrAfgAh0jEIDPgTIDTD1QhNAshKAvg");
	this.shape_8.setTransform(-13.8,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1F3FF").s().p("AjZjcQBJgvBOgsIGlHsIh8CCgAAWExIl4mtQAqggAsgeIGdHrg");
	this.shape_9.setTransform(23.1,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6FCFE").s().p("ApgJDIAstnIi5idICNiwIBPDYIEagHIC3gEIJ7gOIA5gtIgkigICZBwIhSBsIgjNlIB6CXIgIAQIiGiFIhdByIveAqgAnWk7IgvA5IgILVIBvBLIOAgIIB3h5IAbrJIgDgEIhkhag");
	this.shape_10.setTransform(0,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#68C3EB").s().p("Ag8GdIAjtlIBRhsIAFAEIAARkIgBABg");
	this.shape_11.setTransform(69,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2DD8F0").s().p("ApqhgIACgCIDugEIB5DWIkaAHgAh0hrIKwgLIALAIIAkCfIg5AtIp7AOg");
	this.shape_12.setTransform(1,-64.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4D58").s().p("Ap6MTIiWiLQgHgHgEgJQgEgKAAgKIAAyLIABAAQAAgSALgNICPiyQAGgJAKgFQAKgFALAAISkgUQAQgBANALICpB8QAKAHAGAKQAFALAAAMIAARjQAAANgFAKIh3DkQgHAMgLAHQgMAIgNAAIzRAYIgBAAQgUAAgNgNg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F2F54").s().p("Ai2EuIAAhtQAyAgBEAAQCYAAADjHIgCgBQgqBBhVAAQhPAAgzg4Qgyg2AAhTQAAhjA8g+QA9g9BigBQBmAAA6BPQA6BNAACMQAACkhFBgQhHBgiDABQhLAAg3gZgAhBjBQgYAgAAAtQAAAzAYAcQAYAcApAAQAmAAAYgbQAYgbAAgoQAAgxgYgkQgYgkgoAAQgoAAgXAfg");
	this.shape_14.setTransform(0.5,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2F7FF").s().p("Ag9G+QgIgIAAgNQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAANgJAIQgJAJgMAAQgMAAgJgJgAEKGcQgEgFAAgGQAAgHAEgFQAGgFAGAAQAGAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgGAAQgGAAgGgFgAkuFFQgHgIgBgLQABgLAHgIQAIgHAKAAQAMAAAHAHQAHAIABALQgBALgHAIQgHAHgMAAQgKAAgIgHgAHFElQgGgGAAgIQAAgJAGgGQAFgGAJAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgJAAgFgGgAIbDaQgFgFAAgIQAAgHAFgGQAFgFAIAAQAIAAAEAFQAGAGAAAHQAAAIgGAFQgEAGgIAAQgIAAgFgGgAn1DHQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFgADbCwQgHgGAAgJQAAgJAHgHQAFgGAKAAQAKAAAFAGQAHAHAAAJQAAAJgHAGQgFAGgKAAQgKAAgFgGgAIhA4QgGgFABgHQgBgIAGgGQAHgGAHAAQAHAAAFAGQAHAGAAAIQAAAHgHAFQgFAGgHAAQgHAAgHgGgAl0AtQgDgDAAgFQAAgGADgEQAEgDAFAAQAGAAADADQAFAEAAAGQAAAFgFADQgDAEgGAAQgFAAgEgEgAIFhIQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgGAAgFgFgAo7hPQgGgGAAgJQAAgKAGgGQAHgGAJAAQAJAAAHAGQAGAGAAAKQAAAJgGAGQgHAHgJAAQgJAAgHgHgAozjSQgDgDAAgGQAAgFADgEQAEgDAGAAQAGAAACADQAEAEAAAFQAAAGgEADQgCAEgGAAQgGAAgEgEgAImkBQgFgFAAgHQAAgGAFgFQAFgFAHAAQAGAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgGAAQgHAAgFgFgAoCk0QgDgDAAgGQAAgFADgEQAFgDAFAAQAFAAADADQAFAEAAAFQAAAGgFADQgDAEgFAAQgFAAgFgEgAkxljQgFgDAAgGQAAgFAFgFQAEgEAFAAQAGAAADAEQAEAFAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEgAgbmCQgFgFAAgIQAAgHAFgGQAFgEAIAAQAIAAAEAEQAFAGAAAHQAAAIgFAFQgEAGgIAAQgIAAgFgGgAC0mmQgGgFAAgIQAAgIAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_15.setTransform(4.6,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37657A").s().p("AobhcIRBgvICAD8I1LAbg");
	this.shape_16.setTransform(1.6,67.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#497990").s().p("As0AyICbiUICTBEIiKDpgAI7hMIBnh+ICTCTIh6Dng");
	this.shape_17.setTransform(-0.5,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#65E4FF").s().p("AinhzIEggFIAvDsIjKAFg");
	this.shape_18.setTransform(-23.9,-70.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#82C9E3").s().p("Ahlp/IAAAAIDLCtIgxO9IiaCVg");
	this.shape_19.setTransform(-72.3,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#68C3EB").s().p("AhCHGIAmu7IBZh3IAGAEIAATUIAAABg");
	this.shape_20.setTransform(75.9,-8.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BFF0FF").s().p("ApvlEIAzg/IRGhWIBuBkQkRBojpCFIjokQIjkAVIEnFeQgdASgcATIkrlhIiQAYIFdGMQj6C3i/Dgg");
	this.shape_21.setTransform(5.5,-8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEEBFD").s().p("Ap6F/QDAjgD6i2IGeHYICHAAInHobQAcgUAdgSIHtJIICIiQInQocQDpiEERhpIAFAEIgeMQIiDCFIvaAKg");
	this.shape_22.setTransform(5.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DEF7FF").s().p("AlMieICQgYIEqFhQgwAhguAigAiAjYIDkgVIDpEPQhWAvhQA0g");
	this.shape_23.setTransform(-15.2,-25.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1F3FF").s().p("AjvjyQBRg0BVgvIHQIcIiJCPgAAYFPImenYQAvgiAwghIHGIbg");
	this.shape_24.setTransform(25.4,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6FCFE").s().p("AqeJ8IAxu9IjLitICbjCIBXDuIE1gIIDLgEIK6gPIA/gyIgniwICoB7IhaB3IgnO7ICGCnIgJASIiSiTIhoB+IxBAugAoFlbIg0A/IgIMdIB6BTIPZgJICEiFIAdsRIgEgDIhuhkg");
	this.shape_25.setTransform(0,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2DD8F0").s().p("AqohqIADgCIEFgFICFDsIk2AIgAiAh2IL1gMIAMAJIAoCvIg/AyIq7APg");
	this.shape_26.setTransform(1.1,-70.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A4D58").s().p("Aq6NiIikiZQgHgIgFgKQgFgLAAgLIAAz/IABAAQgBgUAMgPICejDQAIgKAKgFQALgGANAAIUagWQASAAAOALIC7CJQAKAHAGALQAGAMAAANIAATUQAAAOgGAMIiDD6QgHANgNAIQgNAIgOAAI1MAbIgBAAQgWAAgPgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.btn_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51190D").s().p("AiSD/Qg2gqAAhIQAAhoB0gwIAAgCQhjgpAAhaQAAhEA2gqQA2gqBOAAQBRAAAzAnQA0AnAABBQAABehtAuIAAABQA6ARAhAnQAgAnAAAzQAABOg5ArQg6AqhfAAQhTAAg2gqgAhXCGQAAAhAaAWQAZAVAlAAQAmAAAZgUQAYgVAAgjQAAhEhbggQhUAhAABDgAgwi+QgVATAAAdQAAA4BHAdQBHgdAAg4QABgfgUgSQgUgSggAAQgcAAgWATg");
	this.shape.setTransform(0.8,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C615").s().p("Ag3GWQgJgIAAgMQAAgLAJgIQAHgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgHgIgADyF2QgFgEABgGQgBgGAFgEQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFgAkSEnQgIgHABgKQgBgKAIgHQAGgGAKAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgGgHgAGbELQgFgGAAgHQAAgIAFgGQAGgFAHAAQAJAAAFAFQAGAGgBAIQABAHgGAGQgFAFgJAAQgHAAgGgFgAHqDGQgEgEgBgHQABgHAEgFQAFgFAHAAQAHAAAEAFQAFAFAAAHQAAAHgFAEQgEAFgHAAQgHAAgFgFgAnIC1QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgADGCgQgFgFAAgJQAAgIAFgGQAGgGAJAAQAIAAAFAGQAHAGgBAIQABAJgHAFQgFAGgIAAQgJAAgGgGgAHvAzQgEgEAAgHQAAgHAEgGQAGgFAHAAQAHAAAFAFQAFAGAAAHQAAAHgFAEQgFAGgHAAQgHAAgGgGgAlSApQgDgDAAgFQAAgFADgDQADgDAFAAQAGAAACADQAEADAAAFQAAAFgEADQgCAEgGAAQgFAAgDgEgAHWhBQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgAoHhIQgFgFAAgJQAAgIAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAIQAAAJgFAFQgGAGgJAAQgIAAgGgGgAoAi/QgCgDAAgFQAAgFACgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgAH0jqQgEgEgBgGQABgGAEgFQAFgEAGAAQAFAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgFAAQgGAAgFgFgAnTkYQgDgDABgFQgBgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgEAAgEgEgAkWlDQgEgDABgFQgBgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAgZlfQgEgEAAgHQAAgHAEgFQAGgEAHAAQAHAAAEAEQADAFAAAHQAAAHgDAEQgEAFgHAAQgHAAgGgFgACjl/QgFgFAAgHQAAgHAFgGQAFgFAIAAQAHAAAEAFQAGAGAAAHQAAAHgGAFQgEAFgHAAQgIAAgFgFg");
	this.shape_1.setTransform(4.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AE4512").s().p("Ahxg5IBehyICFCFIhvDSg");
	this.shape_2.setTransform(62.8,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#95340E").s().p("AnqhUIPegqIB1DlIzRAYg");
	this.shape_3.setTransform(1.5,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD4911").s().p("AiIAAICMiIICFA+Ih+DTg");
	this.shape_4.setTransform(-61.3,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B85605").s().p("AhcpFIABAAIC4CdIgtNnIiMCHg");
	this.shape_5.setTransform(-65.8,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEE47").s().p("AiYhoIEGgFIAqDXIi2AEg");
	this.shape_6.setTransform(-21.7,-63.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDA31F").s().p("Ao3kmIAwg5IPihPIBkBbQj4BfjVB4IjSj3IjQAUIEME+IgyAhIkQlBIiEAWIE9FoQjjCmiuDMg");
	this.shape_7.setTransform(5,-7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F39710").s().p("ApAFcQCujMDjilIF4GtIB8AAImdnqIAygiIHBITIB8iDImnnrQDVh4D4hfIAEADIgbLJIh3B5IuAAJg");
	this.shape_8.setTransform(5.2,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAB91B").s().p("AkuiQICEgWIEPFBQgsAegrAfgAh0jEIDPgTIDTD1QhNAshKAvg");
	this.shape_9.setTransform(-13.8,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9B019").s().p("AjZjcQBJgvBOgsIGlHsIh8CCgAAWExIl4mtQAqggAsgeIGdHrg");
	this.shape_10.setTransform(23.1,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF33E").s().p("ApgJDIAstnIi5idICNiwIBPDYIEagHIC3gEIJ7gOIA5gtIgkigICZBwIhSBsIgjNlIB6CXIgIAQIiGiFIhdByIveAqgAnWk7IgvA5IgILVIBvBLIOAgIIB3h5IAbrJIgDgEIhkhag");
	this.shape_11.setTransform(0,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C8680B").s().p("Ag8GdIAjtlIBRhsIAFAEIAARkIgBABg");
	this.shape_12.setTransform(69,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6C615").s().p("ApqhgIACgCIDugEIB5DWIkaAHgAh0hrIKwgLIALAIIAkCfIg5AtIp7AOg");
	this.shape_13.setTransform(1,-64.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#72200E").s().p("Ap6MTIiWiLQgHgHgEgJQgEgKAAgKIAAyLIABAAQAAgSALgNICPiyQAGgJAKgFQAKgFALAAISkgUQAQgBANALICpB8QAKAHAGAKQAFALAAAMIAARjQAAANgFAKIh3DkQgHAMgLAHQgMAIgNAAIzRAYIgBAAQgUAAgNgNg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51190D").s().p("AihEYQg7guAAhPQAAhyCAg1IAAgCQhtgtAAhjQAAhMA8gtQA6gvBXAAQBYABA4ArQA5AqAABIQAABoh3AyIAAABQBAASAkAsQAjArAAA3QAABWg/AvQg/AuhpABQhcgBg7gugAhgCUQAAAkAdAXQAcAYAoAAQApAAAcgXQAbgWAAgmQAAhMhkgjQhdAlAABKgAg0jRQgYAUAAAhQAAA9BOAgQBPggAAg9QAAgjgWgTQgVgTgjAAQggAAgXAUg");
	this.shape_15.setTransform(0.8,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6C615").s().p("Ag9G+QgIgIAAgNQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAANgJAIQgJAJgMAAQgMAAgJgJgAEKGcQgEgFAAgGQAAgHAEgFQAGgFAGAAQAGAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgGAAQgGAAgGgFgAkuFFQgHgIgBgLQABgLAHgIQAIgHAKAAQAMAAAHAHQAHAIABALQgBALgHAIQgHAHgMAAQgKAAgIgHgAHFElQgGgGAAgIQAAgJAGgGQAFgGAJAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgJAAgFgGgAIbDaQgFgFAAgIQAAgHAFgGQAFgFAIAAQAIAAAEAFQAGAGAAAHQAAAIgGAFQgEAGgIAAQgIAAgFgGgAn1DHQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFgADbCwQgHgGAAgJQAAgJAHgHQAFgGAKAAQAKAAAFAGQAHAHAAAJQAAAJgHAGQgFAGgKAAQgKAAgFgGgAIhA4QgGgFABgHQgBgIAGgGQAHgGAHAAQAHAAAFAGQAHAGAAAIQAAAHgHAFQgFAGgHAAQgHAAgHgGgAl0AtQgDgDAAgFQAAgGADgEQAEgDAFAAQAGAAADADQAFAEAAAGQAAAFgFADQgDAEgGAAQgFAAgEgEgAIFhIQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgGAAgFgFgAo7hPQgGgGAAgJQAAgKAGgGQAHgGAJAAQAJAAAHAGQAGAGAAAKQAAAJgGAGQgHAHgJAAQgJAAgHgHgAozjSQgDgDAAgGQAAgFADgEQAEgDAGAAQAGAAACADQAEAEAAAFQAAAGgEADQgCAEgGAAQgGAAgEgEgAImkBQgFgFAAgHQAAgGAFgFQAFgFAHAAQAGAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgGAAQgHAAgFgFgAoCk0QgDgDAAgGQAAgFADgEQAFgDAFAAQAFAAADADQAFAEAAAFQAAAGgFADQgDAEgFAAQgFAAgFgEgAkxljQgFgDAAgGQAAgFAFgFQAEgEAFAAQAGAAADAEQAEAFAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEgAgbmCQgFgFAAgIQAAgHAFgGQAFgEAIAAQAIAAAEAEQAFAGAAAHQAAAIgFAFQgEAGgIAAQgIAAgFgGgAC0mmQgGgFAAgIQAAgIAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_16.setTransform(4.6,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AE4512").s().p("Ah8g/IBoh9ICRCSIh5Dng");
	this.shape_17.setTransform(69.1,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#95340E").s().p("AobhcIRBgvICAD8I1LAbg");
	this.shape_18.setTransform(1.6,67.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BD4911").s().p("AiWgBICaiVICTBEIiLDpg");
	this.shape_19.setTransform(-67.4,66.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFEE47").s().p("AinhzIEggFIAvDsIjKAFg");
	this.shape_20.setTransform(-23.9,-70.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B85605").s().p("Ahlp/IAAAAIDLCtIgxO9IiaCVg");
	this.shape_21.setTransform(-72.3,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8680B").s().p("AhCHGIAmu7IBZh3IAGAEIAATUIAAABg");
	this.shape_22.setTransform(75.9,-8.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDA31F").s().p("ApvlEIAzg/IRGhWIBuBkQkRBojpCFIjokQIjkAVIEnFeQgdASgcATIkrlhIiQAYIFdGMQj6C3i/Dgg");
	this.shape_23.setTransform(5.5,-8.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F39710").s().p("Ap6F/QDAjgD6i2IGeHYICHAAInHobQAcgUAdgSIHtJIICIiQInQocQDpiEERhpIAFAEIgeMQIiDCFIvaAKg");
	this.shape_24.setTransform(5.7,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAB91B").s().p("AlMieICQgYIEqFhQgwAhguAigAiAjYIDkgVIDpEPQhWAvhQA0g");
	this.shape_25.setTransform(-15.2,-25.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9B019").s().p("AjvjyQBRg0BVgvIHQIcIiJCPgAAYFPImenYQAvgiAwghIHGIbg");
	this.shape_26.setTransform(25.4,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF33E").s().p("AqeJ8IAxu9IjLitICbjCIBXDuIE1gIIDLgEIK6gPIA/gyIgniwICoB7IhaB3IgnO7ICGCnIgJASIiSiTIhoB+IxBAugAoFlbIg0A/IgIMdIB6BTIPZgJICEiFIAdsRIgEgDIhuhkg");
	this.shape_27.setTransform(0,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6C615").s().p("AqohqIADgCIEFgFICFDsIk2AIgAiAh2IL1gMIAMAJIAoCvIg/AyIq7APg");
	this.shape_28.setTransform(1.1,-70.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#72200E").s().p("Aq6NiIikiZQgHgIgFgKQgFgLAAgLIAAz/IABAAQgBgUAMgPICejDQAIgKAKgFQALgGANAAIUagWQASAAAOALIC7CJQAKAHAGALQAGAMAAANIAATUQAAAOgGAMIiDD6QgHANgNAIQgNAIgOAAI1MAbIgBAAQgWAAgPgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.btn_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#380D4A").s().p("AiFEfIDNnbIkNAAIAAhiIGLAAIAAA2IjNIHg");
	this.shape.setTransform(1,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAD0FC").s().p("Ag4GWQgHgIgBgMQABgLAHgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIgADyF2QgFgEABgGQgBgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAkSEnQgIgHABgKQgBgKAIgHQAGgGAKAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgGgHgAGbELQgFgGgBgHQABgIAFgGQAGgFAHAAQAJAAAFAFQAGAGgBAIQABAHgGAGQgFAFgJAAQgHAAgGgFgAHqDGQgEgEgBgHQABgHAEgFQAFgFAHAAQAHAAAEAFQAFAFAAAHQAAAHgFAEQgEAFgHAAQgHAAgFgFgAnIC1QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgADGCgQgFgFAAgJQAAgIAFgGQAGgGAJAAQAIAAAFAGQAHAGgBAIQABAJgHAFQgFAGgIAAQgJAAgGgGgAHvAzQgEgEAAgHQAAgHAEgGQAGgFAHAAQAHAAAFAFQAFAGAAAHQAAAHgFAEQgFAGgHAAQgHAAgGgGgAlSApQgDgDAAgFQAAgFADgDQADgDAFAAQAGAAACADQAEADAAAFQAAAFgEADQgCAEgGAAQgFAAgDgEgAHWhBQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgAoHhIQgFgFAAgJQAAgIAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAIQAAAJgFAFQgGAGgJAAQgIAAgGgGgAoAi/QgCgDAAgFQAAgFACgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgAH0jqQgEgEgBgGQABgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFgAnTkYQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgEAAgEgEgAkWlDQgEgDABgFQgBgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAgZlfQgEgEAAgHQAAgHAEgFQAGgEAHAAQAGAAAFAEQADAFAAAHQAAAHgDAEQgFAFgGAAQgHAAgGgFgACjl/QgFgFAAgHQAAgHAFgGQAFgFAIAAQAHAAAEAFQAGAGAAAHQAAAHgGAFQgEAFgHAAQgIAAgFgFg");
	this.shape_1.setTransform(4.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#543BAC").s().p("Ahxg5IBehyICFCFIhvDSg");
	this.shape_2.setTransform(62.8,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A1D62").s().p("AnqhUIPegqIB1DlIzRAYg");
	this.shape_3.setTransform(1.5,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F28B1").s().p("AiIAAICMiIICFA+Ih+DTg");
	this.shape_4.setTransform(-61.3,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B86FE").s().p("AhcpFIABAAIC4CdIgtNnIiMCHg");
	this.shape_5.setTransform(-65.8,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CE92F5").s().p("AiYhoIEGgFIAqDXIi2AEg");
	this.shape_6.setTransform(-21.7,-63.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5B4FC").s().p("Ao3kmIAwg5IPihPIBkBbQj4BfjVB4IjSj3IjQAUIEME+IgyAhIkQlBIiEAWIE9FoQjjCmiuDMg");
	this.shape_7.setTransform(5,-7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B6A2FC").s().p("ApAFcQCujMDjilIF4GtIB8AAImdnqIAygiIHBITIB8iDImnnrQDVh4D4hfIAEADIgbLJIh3B5IuAAJg");
	this.shape_8.setTransform(5.2,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAD0FC").s().p("AkuiQICEgWIEPFBQgsAegrAfgAh0jEIDPgTIDTD1QhNAshKAvg");
	this.shape_9.setTransform(-13.8,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5C9FF").s().p("AjZjcQBJgvBOgsIGlHsIh8CCgAAWExIl4mtQAqggAsgeIGdHrg");
	this.shape_10.setTransform(23.1,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEC2FF").s().p("ApgJDIAstnIi5idICNiwIBODYIEbgHIC3gEIJ7gOIA5gtIgkigICZBwIhSBsIgjNlIB6CXIgIAQIiGiFIhdByIveAqgAnWk7IgvA5IgILVIBvBLIOAgIIB3h5IAbrJIgDgEIhkhag");
	this.shape_11.setTransform(0,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7575CC").s().p("Ag8GdIAjtlIBRhsIAFAEIAARkIgBABg");
	this.shape_12.setTransform(69,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BE74FD").s().p("ApqhgIACgCIDugEIB5DWIkbAHgAh0hrIKwgLIALAIIAkCfIg5AtIp7AOg");
	this.shape_13.setTransform(1,-64.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C164C").s().p("Ap7MTIiViLQgHgHgEgJQgEgKAAgKIAAyLIABAAQAAgSAKgNICQiyQAGgJAKgFQAKgFALAAISkgUQAQgBANALICpB8QAKAHAGAKQAFALAAAMIAARjQAAANgFAKIh3DkQgHAMgLAHQgMAIgNAAIzRAYIgBAAQgUAAgOgNg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#380D4A").s().p("AiSE8IDhoKIkoAAIAAhtIGzAAIAAA8IjhI7g");
	this.shape_15.setTransform(1,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DAD0FC").s().p("Ag9G+QgJgIABgNQgBgNAJgIQAIgJANAAQAMAAAJAJQAJAIAAANQAAANgJAIQgJAJgMAAQgNAAgIgJgAEKGcQgEgFAAgGQAAgHAEgFQAGgFAFAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgFAAgGgFgAkuFFQgHgIgBgLQABgLAHgIQAIgHAKAAQAMAAAHAHQAHAIABALQgBALgHAIQgHAHgMAAQgKAAgIgHgAHFElQgHgGAAgIQAAgJAHgGQAFgGAJAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgJAAgFgGgAIbDaQgFgFAAgIQAAgHAFgGQAFgFAIAAQAIAAAEAFQAGAGAAAHQAAAIgGAFQgEAGgIAAQgIAAgFgGgAn1DHQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFgADbCwQgHgGAAgJQAAgJAHgHQAFgGAKAAQAKAAAFAGQAHAHAAAJQAAAJgHAGQgFAGgKAAQgKAAgFgGgAIhA4QgGgFABgHQgBgIAGgGQAHgGAHAAQAHAAAFAGQAHAGAAAIQAAAHgHAFQgFAGgHAAQgHAAgHgGgAl0AtQgDgDAAgFQAAgGADgEQAEgDAFAAQAGAAADADQAFAEAAAGQAAAFgFADQgDAEgGAAQgFAAgEgEgAIFhIQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgGAAgFgFgAo7hPQgGgGAAgJQAAgKAGgGQAHgGAJAAQAJAAAHAGQAGAGAAAKQAAAJgGAGQgHAHgJAAQgJAAgHgHgAozjSQgDgDAAgGQAAgFADgEQAEgDAGAAQAGAAACADQAEAEAAAFQAAAGgEADQgCAEgGAAQgGAAgEgEgAImkBQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgHAAQgGAAgFgFgAoCk0QgDgDAAgGQAAgFADgEQAFgDAFAAQAFAAADADQAFAEAAAFQAAAGgFADQgDAEgFAAQgFAAgFgEgAkxljQgFgDAAgGQAAgFAFgFQAEgEAFAAQAGAAADAEQAEAFAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEgAgbmCQgFgFAAgIQAAgHAFgGQAFgEAIAAQAIAAAEAEQAFAGAAAHQAAAIgFAFQgEAGgIAAQgIAAgFgGgAC0mmQgGgFAAgIQAAgIAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_16.setTransform(4.6,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#543BAC").s().p("Ah8g/IBoh9ICRCSIh5Dng");
	this.shape_17.setTransform(69.1,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A1D62").s().p("AobhcIRBgvICAD8I1LAbg");
	this.shape_18.setTransform(1.6,67.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F28B1").s().p("AiWgBICaiVICTBEIiLDpg");
	this.shape_19.setTransform(-67.4,66.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE92F5").s().p("AinhzIEggFIAvDsIjKAFg");
	this.shape_20.setTransform(-23.9,-70.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B86FE").s().p("Ahlp/IAAAAIDLCtIgxO9IiaCVg");
	this.shape_21.setTransform(-72.3,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7575CC").s().p("AhCHGIAmu7IBZh3IAGAEIAATUIAAABg");
	this.shape_22.setTransform(75.9,-8.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C5B4FC").s().p("ApvlEIAzg/IRGhWIBuBkQkRBojpCFIjokQIjkAVIEnFeQgdASgcATIkrlhIiQAYIFdGMQj6C3i/Dgg");
	this.shape_23.setTransform(5.5,-8.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B6A2FC").s().p("Ap6F/QDAjgD6i2IGeHYICHAAInHobQAcgUAdgSIHtJIICIiQInQocQDpiEERhpIAFAEIgeMQIiDCFIvaAKg");
	this.shape_24.setTransform(5.7,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DAD0FC").s().p("AlMieICQgYIEqFhQgwAhguAigAiAjYIDkgVIDpEPQhWAvhQA0g");
	this.shape_25.setTransform(-15.2,-25.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D5C9FF").s().p("AjvjyQBRg0BVgvIHQIcIiJCPgAAYFPImenYQAvgiAwghIHGIbg");
	this.shape_26.setTransform(25.4,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EEC2FF").s().p("AqeJ8IAxu9IjLitICbjCIBWDuIE2gIIDLgEIK6gPIA/gyIgniwICoB7IhaB3IgnO7ICGCnIgJASIiSiTIhoB+IxBAugAoFlbIg0A/IgIMdIB6BTIPZgJICEiFIAdsRIgEgDIhuhkg");
	this.shape_27.setTransform(0,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BE74FD").s().p("AqohqIADgCIEFgFICFDsIk3AIgAiAh2IL1gMIAMAJIAoCvIg/AyIq7APg");
	this.shape_28.setTransform(1.1,-70.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C164C").s().p("Aq6NiIikiZQgHgIgFgKQgFgLAAgLIAAz/IABAAQAAgUALgPICejDQAIgKAKgFQALgGANAAIUagWQASAAAOALIC7CJQAKAHAGALQAGAMAAANIAATUQAAAOgGAMIiDD6QgHANgNAIQgNAIgOAAI1MAbIgBAAQgWAAgPgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A213C").s().p("AiSDiQg1hIAAh7QAAiRBEhbQBEhbB4AAQBBAAAmAQIAABlQgsgZgzAAQhCAAgnA0QgoA0AABTIACAAQApg/BQAAQBIAAArAyQAqAwAABPQAABXg3A4Qg4A5hWAAQhhAAg0hHgAg2AiQgWAZAAAnQAAAtAWAfQAWAfAjAAQAlAAAVgdQAVgcAAgrQAAhhhPAAQgjAAgWAag");
	this.shape.setTransform(1.4,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FB1DA").s().p("Ag3GWQgJgIAAgMQAAgLAJgIQAHgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgHgIgADyF2QgFgEABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEAAAGQAAAGgEAEQgEAFgHAAQgFAAgFgFgAkSEnQgIgHABgKQgBgKAIgHQAHgGAJAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAGcELQgGgGAAgHQAAgIAGgGQAFgFAHAAQAJAAAFAFQAGAGgBAIQABAHgGAGQgFAFgJAAQgHAAgFgFgAHqDGQgEgEgBgHQABgHAEgFQAFgFAHAAQAHAAAEAFQAGAFAAAHQAAAHgGAEQgEAFgHAAQgHAAgFgFgAnIC1QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgADGCgQgFgFAAgJQAAgIAFgGQAHgGAIAAQAIAAAFAGQAHAGgBAIQABAJgHAFQgFAGgIAAQgIAAgHgGgAHvAzQgEgEAAgHQAAgHAEgGQAGgFAHAAQAHAAAFAFQAFAGAAAHQAAAHgFAEQgFAGgHAAQgHAAgGgGgAlSApQgDgDAAgFQAAgFADgDQADgDAFAAQAGAAACADQAEADAAAFQAAAFgEADQgCAEgGAAQgFAAgDgEgAHWhBQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgGAAgFgEgAoHhIQgFgFAAgJQAAgIAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAIQAAAJgFAFQgGAGgJAAQgIAAgGgGgAn/i/QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAH0jqQgEgEgBgGQABgGAEgFQAFgEAGAAQAFAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgFAAQgGAAgFgFgAnTkYQgCgDAAgFQAAgFACgDQAEgDAFAAQAFAAACADQAEADAAAFQAAAFgEADQgCAEgFAAQgFAAgEgEgAkWlDQgEgDABgFQgBgFAEgEQAEgDAFAAQAFAAADADQAEAEABAFQgBAFgEADQgDAEgFAAQgFAAgEgEgAgZlfQgEgEAAgHQAAgHAEgFQAGgEAHAAQAGAAAFAEQAEAFAAAHQAAAHgEAEQgFAFgGAAQgHAAgGgFgACjl/QgFgFABgHQgBgHAFgGQAFgFAIAAQAHAAAEAFQAGAGAAAHQAAAHgGAFQgEAFgHAAQgIAAgFgFg");
	this.shape_1.setTransform(4.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#153A5F").s().p("AnphUIPdgqIB1DlIzRAYg");
	this.shape_2.setTransform(1.5,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E52A3").s().p("ArpAuICNiHICGA+Ih/DTgAIHhFIBehyICFCFIhuDSg");
	this.shape_3.setTransform(-0.4,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#186B91").s().p("AhcpFIABAAIC4CdIgtNnIiMCHg");
	this.shape_4.setTransform(-65.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#65E4FF").s().p("AiYhoIEFgFIAsDXIi4AEg");
	this.shape_5.setTransform(-21.6,-63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#35A4C2").s().p("Ao3kmIAwg5IPihPIBkBbQj4BfjVB4IjSj3IjQAUIEME+IgzAhIkQlBIiDAWIE9FoQjjCmiuDMg");
	this.shape_6.setTransform(5,-7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D91BC").s().p("ApAFcQCujMDjilIF5GtIB6AAImdnqIAzgiIHBITIB8iDImnnrQDVh4D4hfIAEADIgbLJIh3B5IuBAJg");
	this.shape_7.setTransform(5.2,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44ADC7").s().p("AkuiQICEgWIEPFBQgsAegrAfgAh0jEIDPgTIDTD1QhNAshKAvg");
	this.shape_8.setTransform(-13.8,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2BA3D0").s().p("AjZjcQBJgvBOgsIGlHsIh8CCgAAWExIl4mtQAqggAsgeIGdHrg");
	this.shape_9.setTransform(23.1,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7CEDFF").s().p("ApgJDIAstnIi5idICNiwIBPDYIEagHIC4gEIJ6gOIA5gtIgkigICZBwIhSBsIgjNlIB6CXIgIAQIiFiFIheByIvdAqgAnWk7IgvA5IgHLVIBuBLIOAgIIB3h5IAbrJIgDgEIhkhag");
	this.shape_10.setTransform(0,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1DA7DA").s().p("Ag8GdIAjtlIBRhsIAFAEIAARkIgBABg");
	this.shape_11.setTransform(69,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2DD8F0").s().p("ApqhgIACgCIDugEIB5DWIkaAHgAh0hrIKwgLIALAIIAkCfIg5AtIp7AOg");
	this.shape_12.setTransform(1,-64.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#142B46").s().p("Ap6MTIiViLQgIgHgEgJQgEgKAAgKIAAyLIABAAQAAgSALgNICPiyQAGgJALgFQAJgFALAAISkgUQARgBANALICoB8QAKAHAGAKQAFALAAAMIAARjQAAANgFAKIh3DkQgHAMgLAHQgMAIgNAAIzRAYIgBAAQgUAAgNgNg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0A213C").s().p("AihD4Qg6hPAAiHQAAifBLhkQBKhlCFAAQBHAAAqARIAABwQgwgbg5AAQhIAAgrA5QgsA5AABbIACAAQAthFBYAAQBPAAAvA3QAvA1AABXQAABfg9A+Qg9A+hfAAQhrABg5hPgAg8AlQgYAcAAArQAAAxAYAiQAZAiAmAAQApAAAXgfQAXggAAgvQAAhqhXAAQgnAAgYAcg");
	this.shape_14.setTransform(1.6,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2FB1DA").s().p("Ag9G+QgIgIAAgNQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAANgJAIQgJAJgMAAQgMAAgJgJgAEKGcQgEgFAAgGQAAgHAEgFQAGgFAGAAQAGAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgGAAQgGAAgGgFgAkuFFQgHgIgBgLQABgLAHgIQAIgHALAAQAKAAAIAHQAHAIABALQgBALgHAIQgIAHgKAAQgLAAgIgHgAHFElQgGgGAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgIAAgGgGgAIbDaQgFgFAAgIQAAgHAFgGQAFgFAIAAQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAGgIAAQgIAAgFgGgAn1DHQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFgADbCwQgHgGAAgJQAAgJAHgHQAGgGAKAAQAIAAAGAGQAHAHAAAJQAAAJgHAGQgGAGgIAAQgKAAgGgGgAIhA4QgGgFABgHQgBgIAGgGQAHgGAHAAQAHAAAGAGQAFAGABAIQgBAHgFAFQgGAGgHAAQgHAAgHgGgAl0AtQgDgDAAgFQAAgGADgEQAEgDAFAAQAGAAADADQAFAEAAAGQAAAFgFADQgDAEgGAAQgFAAgEgEgAIFhIQgEgFAAgGQAAgHAEgFQAFgFAGAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgGAAgFgFgAo6hPQgHgGAAgJQAAgKAHgGQAHgGAIAAQAJAAAHAGQAGAGAAAKQAAAJgGAGQgHAHgJAAQgIAAgHgHgAoyjSQgEgDABgGQgBgFAEgEQADgDAGAAQAGAAACADQAEAEAAAFQAAAGgEADQgCAEgGAAQgGAAgDgEgAImkBQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgHAAQgHAAgFgFgAoBk0QgDgDgBgGQABgFADgEQAEgDAGAAQAEAAADADQAFAEAAAFQAAAGgFADQgDAEgEAAQgGAAgEgEgAkxljQgFgDAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAEAFAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEgAgbmCQgFgFAAgIQAAgHAFgGQAFgEAIAAQAIAAAFAEQAEAGAAAHQAAAIgEAFQgFAGgIAAQgIAAgFgGgAC0mmQgGgFAAgIQAAgIAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_15.setTransform(4.6,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#153A5F").s().p("AoahcIRAgvICAD8I1LAbg");
	this.shape_16.setTransform(1.6,67.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2E52A3").s().p("As0AyICbiUICUBEIiLDpgAI7hMIBoh+ICSCTIh6Dng");
	this.shape_17.setTransform(-0.5,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#65E4FF").s().p("AinhzIEggFIAvDsIjKAFg");
	this.shape_18.setTransform(-23.8,-70.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#186B91").s().p("Ahlp/IAAAAIDLCtIgxO9IiaCVg");
	this.shape_19.setTransform(-72.3,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1DA7DA").s().p("AhCHGIAmu7IBZh3IAGAEIAATUIAAABg");
	this.shape_20.setTransform(75.9,-8.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#35A4C2").s().p("ApwlEIA1g/IRFhWIBuBkQkRBojpCFIjokQIjlAVIEoFeIg5AlIkrlhIiQAYIFdGMQj6C3i/Dgg");
	this.shape_21.setTransform(5.5,-8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D91BC").s().p("Ap6F/QC/jgD6i2IGfHYICGAAInGobIA4gmIHtJIICJiQInQocQDpiEERhpIAEAEIgdMQIiECFIvZAKg");
	this.shape_22.setTransform(5.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#44ADC7").s().p("AlMieICQgYIEqFhQgwAhguAigAiAjYIDkgVIDpEPQhWAvhQA0g");
	this.shape_23.setTransform(-15.2,-25.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2BA3D0").s().p("AjvjyQBRg0BVgvIHQIcIiJCPgAAZFPImfnYQAvgiAwghIHGIbg");
	this.shape_24.setTransform(25.4,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7CEDFF").s().p("AqeJ8IAxu9IjLitICbjCIBXDuIE1gIIDMgEIK5gPIA/gyIgniwICoB7IhaB3IgnO7ICGCnIgJASIiSiTIhoB+IxAAugAoFlbIg0A/IgIMdIB6BTIPZgJICEiFIAdsRIgEgDIhuhkg");
	this.shape_25.setTransform(0,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2DD8F0").s().p("AqohqIADgCIEFgFICFDsIk2AIgAh/h2IL0gMIAMAJIAoCvIg/AyIq6APg");
	this.shape_26.setTransform(1.1,-70.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#142B46").s().p("Aq6NiIijiZQgJgIgEgKQgFgLAAgLIAAz/IABAAQgBgUAMgPICejDQAIgKALgFQAKgGANAAIUagWQASAAAPALIC6CJQAKAHAGALQAGAMAAANIAATUQAAAOgGAMIiDD6QgHANgMAIQgOAIgOAAI1MAbIgBAAQgWAAgPgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.btn_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#543208").s().p("AqyNSQifAAAAifIAA1kQAAigCfAAIVkAAQCgAAAACgIAAVkQAACfigAAgAr8ptIAATbQAACPCPAAITbAAQCPAAAAiPIAAzbQAAiPiPAAIzbAAQiPAAAACPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C2100").s().p("AptL9QiPAAAAiPIAAzbQAAiPCPAAITbAAQCPAAAACPIAATbQAACPiPAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F31F41").s().p("AqyNSQifAAAAifIAA1kQAAigCfAAIVkAAQCgAAAACgIAAVkQAACfigAAgAr8ptIAATbQAACPCPAAITbAAQCPAAAAiPIAAzbQAAiPiPAAIzbAAQiPAAAACPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-85,170,170);


(lib.graph_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.graph_21("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1136.6,-1136.6,2273.4,2273.4);


(lib.graph_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// 图层 2
	this.instance = new lib.graph_10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-387.5,34.1,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(28));

	// 图层 3
	this.instance_1 = new lib.graph_11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,22.2,5,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(25));

	// 图层 4
	this.instance_2 = new lib.graph_12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,-401.8,0.1,0.1,0,0,0,0.5,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:30,x:215.9,y:-178.6},3).to({rotation:95.3,x:366.9,y:-174.5},4).to({regY:-0.1,rotation:150,x:496.6,y:-80.4},3).to({rotation:240,x:675.3,y:-187.3},4).wait(4));

	// 图层 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_26 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_27 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_28 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_29 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_30 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_31 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_32 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_33 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_34 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_35 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_36 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_37 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");
	var mask_graphics_38 = new cjs.Graphics().p("EgulAfEMAAAg+HMBdLAAAMAAAA+Hg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_graphics_26,x:-133,y:-165.4}).wait(1).to({graphics:mask_graphics_27,x:-83,y:-165.4}).wait(1).to({graphics:mask_graphics_28,x:-41,y:-165.4}).wait(1).to({graphics:mask_graphics_29,x:1.1,y:-165.4}).wait(1).to({graphics:mask_graphics_30,x:43.2,y:-165.4}).wait(1).to({graphics:mask_graphics_31,x:85.2,y:-165.4}).wait(1).to({graphics:mask_graphics_32,x:111.9,y:-165.9}).wait(1).to({graphics:mask_graphics_33,x:138.6,y:-166.3}).wait(1).to({graphics:mask_graphics_34,x:165.3,y:-166.7}).wait(1).to({graphics:mask_graphics_35,x:223.2,y:-166.7}).wait(1).to({graphics:mask_graphics_36,x:281.1,y:-166.7}).wait(1).to({graphics:mask_graphics_37,x:338.9,y:-166.7}).wait(1).to({graphics:mask_graphics_38,x:396.8,y:-166.7}).wait(4));

	// 图层 5
	this.instance_3 = new lib.graph_13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(422.1,-95.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(16));

	// 图层 6
	this.instance_4 = new lib.graph_14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(399.8,58,5,5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(20));

	// 图层 7
	this.instance_5 = new lib.graph_15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(399.4,53.6,0.8,0.8,-15,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:512.7,y:139.5},5).wait(23));

	// 图层 8
	this.instance_6 = new lib.graph_16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-381.2,50.8,0.64,0.64,30,0,0,0,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:-592.6,y:122.5},5).wait(29));

	// 图层 9
	this.instance_7 = new lib.graph_17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-229.9,-1.6,0.64,0.64,0,0,0,0,-0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-104.8},5).wait(27));

	// 图层 10
	this.instance_8 = new lib.graph_18("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(141.6,14.4,5,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({startPosition:0},4,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1262.5,-885.9,1745,1845);


(lib.mc_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_82 = function() {
		this.stop();
		this.startBtn.on('click',(function(){
			this.parent.gotoAndStop(1);
			}).bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(7));

	// btn_0
	this.instance = new lib.btn_7();
	this.instance.parent = this;
	this.instance.setTransform(-298.5,405);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.startBtn = new lib.btn_7();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(-298.5,405);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},74).to({state:[{t:this.startBtn}]},8).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({_off:true,alpha:1},8,cjs.Ease.get(1)).wait(7));

	// 图层 3
	this.instance_1 = new lib.graph_8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-298.5,221);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(10));

	// 图层 4
	this.instance_2 = new lib.graph_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-343.8,-131.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(62));

	// 图层 5
	this.instance_3 = new lib.graph_19("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-289.7,-20.1,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.05,scaleY:1.05,x:-289.6},6,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,x:-289.7,y:-20},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-20.1},4,cjs.Ease.get(1)).wait(75));

	// bitmap_100
	this.instance_4 = new lib.graph_20("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-272.9,-2.5,0.1,0.1,0,0,0,-0.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:0,scaleX:1.05,scaleY:1.05,x:-272.8},6,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,x:-272.9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(5).to({mode:"synched"},0).wait(66));

	// 图层 7
	this.instance_5 = new lib.graph_22("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,144.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1843,-850.9,3686,1990);


// stage content:
(lib.source = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.num_0.value=6
		this.num_1.value=7
		this.num_2.value=8
		this.num_3.value=9

		this.num_0.bounds=new createjs.Rectangle(632-80,912-80,160,160)
		this.num_1.bounds=new createjs.Rectangle(875-80,912-80,160,160)
		this.num_2.bounds=new createjs.Rectangle(1098-80,912-80,160,160)
		this.num_3.bounds=new createjs.Rectangle(1327-80,912-80,160,160)


		this.space_0.bounds=new createjs.Rectangle(556-85,557-85,170,170)
		this.space_1.bounds=new createjs.Rectangle(845-85,557-85,170,170)
		this.space_2.bounds=new createjs.Rectangle(1093-85,557-85,170,170)
		this.space_3.bounds=new createjs.Rectangle(1357-85,557-85,170,170)

		this.soundBtn.on('click',(function(){
			this.soundEffect.gotoAndPlay(1);
			}).bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.submitBtn = new lib.submitBtn();
	this.submitBtn.name = "submitBtn";
	this.submitBtn.parent = this;
	this.submitBtn.setTransform(1690,952);
	this.submitBtn._off = true;
	new cjs.ButtonHelper(this.submitBtn, 0, 1, 2, false, new lib.submitBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.submitBtn).wait(1).to({_off:false},0).wait(1));

	// layer 3
	this.soundBtn = new lib.btn_5();
	this.soundBtn.name = "soundBtn";
	this.soundBtn.parent = this;
	this.soundBtn.setTransform(119.8,143.4);
	new cjs.ButtonHelper(this.soundBtn, 0, 1, 2, false, new lib.btn_5(), 3);

	this.num_3 = new lib.btn_4();
	this.num_3.name = "num_3";
	this.num_3.parent = this;
	this.num_3.setTransform(1327.4,912.3);
	new cjs.ButtonHelper(this.num_3, 0, 1, 1);

	this.num_2 = new lib.btn_3();
	this.num_2.name = "num_2";
	this.num_2.parent = this;
	this.num_2.setTransform(1098.3,912.3);
	new cjs.ButtonHelper(this.num_2, 0, 1, 1);

	this.num_1 = new lib.btn_2();
	this.num_1.name = "num_1";
	this.num_1.parent = this;
	this.num_1.setTransform(875.2,912.3);
	new cjs.ButtonHelper(this.num_1, 0, 1, 1);

	this.num_0 = new lib.btn_1();
	this.num_0.name = "num_0";
	this.num_0.parent = this;
	this.num_0.setTransform(632.5,912.3);
	new cjs.ButtonHelper(this.num_0, 0, 1, 1);

	this.space_3 = new lib.btn_0();
	this.space_3.name = "space_3";
	this.space_3.parent = this;
	this.space_3.setTransform(1357.7,557.1);

	this.space_2 = new lib.btn_0();
	this.space_2.name = "space_2";
	this.space_2.parent = this;
	this.space_2.setTransform(1093.3,557.1);

	this.space_1 = new lib.btn_0();
	this.space_1.name = "space_1";
	this.space_1.parent = this;
	this.space_1.setTransform(845.3,557.1);

	this.space_0 = new lib.btn_0();
	this.space_0.name = "space_0";
	this.space_0.parent = this;
	this.space_0.setTransform(556.8,557.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.space_0},{t:this.space_1},{t:this.space_2},{t:this.space_3},{t:this.num_0},{t:this.num_1},{t:this.num_2},{t:this.num_3},{t:this.soundBtn}]},1).wait(1));

	// layer 4
	this.soundEffect = new lib.soundEffect();
	this.soundEffect.name = "soundEffect";
	this.soundEffect.parent = this;
	this.soundEffect.setTransform(-674.1,126.1);

	this.instance = new lib.bm_23();
	this.instance.parent = this;
	this.instance.setTransform(-608,-282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.soundEffect}]},1).wait(1));

	// layer 4
	this.startMc = new lib.mc_6();
	this.startMc.name = "startMc";
	this.startMc.parent = this;
	this.startMc.setTransform(1258.6,517);

	this.timeline.addTween(cjs.Tween.get(this.startMc).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375.5,206.1,3686,1990);
// library properties:
lib.properties = {
	id: '63E0EA705EDF4E2C9F7762D61C88AD1D',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{loadTimeout:1000000,src:"static/images/source_atlas_.png?1512616708949", id:"source_atlas_"},
		{loadTimeout:1000000,src:"static/sounds/effect.mp3?1512616709022", id:"effect"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['63E0EA705EDF4E2C9F7762D61C88AD1D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
