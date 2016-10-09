/* jshint jasmine: true */
/*global describe, it, expect, PokemonService */

describe("Pokemon service", function () {
    "use strict";

    it("starts with page 1", function () {
        var srv = new PokemonService();
        expect(srv.currentPage).toBe(1);
    });

    it("can get the first five Pokemons", function (done) {
        var srv = new PokemonService();
        srv.loadPokemons(function (result) {
            expect(result.next).toBeTruthy();
            expect(result.previous).toBeFalsy();
            expect(result.pokemons.length).toBe(5);
            result.pokemons.forEach(function (p) {
                expect(p.url).toBeDefined();
                expect(p.name).toBeDefined();
            });

            done();
        });
    });
});
