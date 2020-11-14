from django.shortcuts import render
import requests
from django.views.generic import TemplateView


# POSTS VIEW ENDPOINT
class PostListView(TemplateView):
    def get(self, request, *args, **kwargs):
        page = request.GET.get('page', 1)
        json_data = requests.get('http://jsonplaceholder.typicode.com/posts?_page={}&_limit=5'.format(page)).json()
        # print(page)
        context = {
            "posts": json_data,
        }
        return render(request, 'blog-listing.html', context)


# POST DETAILS VIEW ENDPOINT
class PostDetailView(TemplateView):
    def get(self, request, *args, **kwargs):
        post_id = kwargs['post_id']
        # get post details by posts id
        req_post = requests.get('http://jsonplaceholder.typicode.com/posts/{}'.format(post_id))
        # get post comments by posts id
        req_comment = requests.get('http://jsonplaceholder.typicode.com/posts/{}/comments'.format(post_id))

        post = req_post.json()
        comments = req_comment.json()

        context = {
            "post": post,
            "comments": comments,
        }
        return render(request, 'blog-post.html', context)
