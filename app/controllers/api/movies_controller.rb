class Api::MoviesController < ApplicationController
  before_action :set_movie, except: [:index, :create]
  def index
    render json: Movie.all
  end

  def show
    render json: @movie
  end

  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      render json: { errors: movie_errors }, status: 401
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: { errors: @movie_errors }, status: 401
    end
  end

  def destroy
    @movie.destroy
    render json: { message: "Destroyed!" }
  end

  private
    def set_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title, :description, :year, :in_theaters)
    end
end
