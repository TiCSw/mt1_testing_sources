import { HomeService } from "./home.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("home.service", () => {
    let homeService: HomeService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HomeService]
        });

        homeService = TestBed.get(HomeService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it("retrieve data", () => {
        homeService.getData()
            .subscribe(data => {
                expect(data.length).toBe(3)
            })
    })
});