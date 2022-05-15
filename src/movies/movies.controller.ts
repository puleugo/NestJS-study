import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // 이부분이 엔트리 포인트 ex) localhost:3000/movies
export class MoviesController {
  @Get()
  getAll() {
    return 'This whill return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // @Put() // update, 전부분
  @Patch('/:id') // update, 일부분
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
